// Section04-Ex03-App.js
// App functional component using MyButton functional component
import React from 'react';

function MyButton () {
  return (
    <button>I'm a button</button>
  );
} 

function App () {
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton />
        </div>
    );
}

export default App;
