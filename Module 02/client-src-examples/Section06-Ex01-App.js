// Section06-Ex01-App.js
// Understanding JSX
  
function AboutPage() {
    return (
      <>
        <h1>About</h1>
        <p>Hello there.<br />How do you do?</p>
      </>
    );
 }

function MyButton() {
    return (
        <button>
        I'm a button
        </button>
    );
}
  
function App() {
    return (
      <div>
        <h1>Welcome to my app</h1>
        <MyButton />
        <AboutPage />
      </div>
    );
}

export default App;