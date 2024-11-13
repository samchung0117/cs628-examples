// Section08-Ex01-App.js
// Example of handling a button click event in React

import { useState } from 'react';

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
function App() {
  return (
    <div>
      <h1>Updating the screen</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;