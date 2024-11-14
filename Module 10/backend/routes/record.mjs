import express from "express";
import axios from 'axios';
import db from "../db/conn.mjs";
import { ObjectId } from "mongodb";

const router = express.Router();

// This section will help you get a list of all the records.
router.get("/", async (req, res) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req, res) => {
  let collection = await db.collection("records");
  let query = {_id: new ObjectId(req.params.id)};
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req, res) => {
  let newDocument = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  let collection = await db.collection("records");
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

// This section will help you update a record by id.
router.patch("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates =  {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level
    }
  };

  let collection = await db.collection("records");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

// This section will help you delete a record
router.delete("/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };

  const collection = db.collection("records");
  let result = await collection.deleteOne(query);

  res.send(result).status(200);
});

router.post("/chat", async (req, res) => {
  const userMessage = req.body.content || "Please provide a message.";

  // Set headers for SSE (Server-Sent Events)
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  try {
    // Query MongoDB for relevant records
    const collection = db.collection("records");
    const query = { $text: { $search: userMessage } };
    const results = await collection.find(query).limit(5).toArray();

    // Create the context for the RAG model
    const context = results.map((doc) => `${doc.name}: ${doc.position} (${doc.level})`).join('\n');
    const augmentedPrompt = `Context:\n${context}\n\nUser: ${userMessage}\nBot:`;

    // Send the request to the Gemma 2:2b model
    const axiosResponse = await axios({
      method: "post",
      url: "http://localhost:11434/api/generate",
      data: {
        model: "gemma2:2b",
        prompt: augmentedPrompt,
      },
      responseType: "stream",
    });

    // Stream the response from the model to the client
    axiosResponse.data.on("data", (chunk) => {
      const chunkStr = chunk.toString();

      // Ensure the chunk is not empty before sending it
      if (chunkStr.trim()) {
        res.write(`data: ${chunkStr}\n\n`);
      }
    });

    // Handle the end of the stream
    axiosResponse.data.on("end", () => {
      res.write("data: [DONE]\n\n");
      res.end();
    });

    // Handle any errors during streaming
    axiosResponse.data.on("error", (error) => {
      console.error("Error during streaming:", error);
      res.write("data: Error occurred during streaming\n\n");
      res.end();
    });

  } catch (error) {
    console.error("Error during RAG chat:", error);
    res.status(500).write("data: Internal Server Error\n\n");
    res.end();
  }
});


export default router;