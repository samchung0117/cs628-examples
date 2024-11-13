// Section08-Ex03-App.js
// https://react.dev/learn/describing-the-ui#keeping-components-pure

function Cup({ guest }) {
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>;
}

function App() {
    return (
      <>
        <Cup guest={1} />
        <Cup guest={2} />
        <Cup guest={3} />
      </>
    );
}
  
export default App;