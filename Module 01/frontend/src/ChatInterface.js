import React, { useState } from 'react';

function ChatInterface() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3001/api/chat';

  // Handle text input change
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle chat submission and stream the response
  const handleSubmit = async () => {
    if (inputText.trim()) {
      setIsLoading(true);
      setResult('');  // Clear previous result
  
      try {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ content: inputText }),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
  
        // Stream the response in chunks
        let done = false;
        let accumulatedResult = '';  // For accumulating parsed response
  
        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;
          const chunk = decoder.decode(value, { stream: true });
  
          // Split by lines, in case multiple chunks are sent in one packet
          const lines = chunk.split('\n');
  
          lines.forEach((line) => {
            if (line.startsWith('data:')) {
              try {
                // Parse each SSE event data chunk
                const parsedData = JSON.parse(line.replace('data: ', ''));
                
                if (parsedData.response) {
                  // Accumulate the parsed 'response' field
                  accumulatedResult += parsedData.response;
                  setResult(accumulatedResult);
                }
  
                // Check if the response is marked as 'done'
                if (parsedData.done) {
                  setIsLoading(false);
                }
              } catch (err) {
                console.error('Error parsing JSON chunk:', err);
              }
            }
          });
        }
  
      } catch (error) {
        console.error('Error during streaming:', error);
        setIsLoading(false);
      }
    }
  };  

  return (
    <div>
      <h1>Chat with Gemma 2:2b</h1>

      <div>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          placeholder="Type your message here..."
          rows="5"
          cols="50"
        />
      </div>

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Waiting for response...' : 'Send'}
      </button>

      <div>
        <h2>Response:</h2>
        <p>{result}</p>
      </div>
    </div>
  );
}

export default ChatInterface;
