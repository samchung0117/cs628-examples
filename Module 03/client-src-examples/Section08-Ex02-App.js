// Section08-Ex02-App.js
// https://react.dev/learn/describing-the-ui#keeping-components-pure

function Cup({ guest }) {
    return <h2>Tea cup for guest #{guest}</h2>;
}
  
function App() {
    return (
      <>
        <Cup guest={0} />
        <Cup guest={1} />
        <Cup guest={2} />
      </>
    );
}
  
export default App;