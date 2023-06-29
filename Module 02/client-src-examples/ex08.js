// https://react.dev/learn#updating-the-screen
// https://react.dev/learn#using-hooks

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