import React, { useState } from 'react';

function ChatInterface() {
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const backendUrl = process.env.REACT_APP_BACKEND_URL;

  // Handle text input change
  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  // Handle chat submission and stream the response
  const handleSubmit = async () => {
    if (inputText.trim()) {
      setIsLoading(true);
      setResult(''); // Clear previous result

      try {
        const response = await fetch(`${backendUrl}/record/chat`, {
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

        let done = false;
        let accumulatedResult = '';

        while (!done) {
          const { value, done: readerDone } = await reader.read();
          done = readerDone;

          if (value) {
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            lines.forEach((line) => {
              if (line.startsWith('data:')) {
                const data = line.replace('data: ', '').trim();

                // Check for the end of the stream
                if (data === '[DONE]') {
                  setIsLoading(false);
                  return;
                }

                try {
                  // Parse JSON if it's not "[DONE]"
                  const parsedData = JSON.parse(data);
                  if (parsedData.response) {
                    accumulatedResult += parsedData.response;
                    setResult(accumulatedResult);
                  }
                } catch (err) {
                  console.error('Error parsing JSON chunk:', err);
                }
              }
            });
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error during streaming:', error);
        setIsLoading(false);
        setResult('An error occurred. Please try again.');
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
          disabled={isLoading}
        />
      </div>

      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Waiting for response...' : 'Send'}
      </button>

      <div>
        <h2>Response:</h2>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{result}</pre>
      </div>
    </div>
  );
}

export default ChatInterface;