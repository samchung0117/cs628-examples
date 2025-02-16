import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Edit from "./components/edit";
import Create from "./components/create";
import ChatInterface from "./components/chat";

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ChatInterface />} />
          <Route exact path="/record" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
  );
};

export default App;
 