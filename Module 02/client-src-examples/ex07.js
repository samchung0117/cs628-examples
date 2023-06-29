// https://react.dev/learn#responding-to-events

function MyButton() {
    function handleClick() {
      alert('You clicked me!');
    }
  
    return (
      <button onClick={handleClick}>
        Click me
      </button>
    );
}

function App() {
    return (
      <div>
        <h1>Responding to events</h1>
        <MyButton />
      </div>
    );
}

export default App;