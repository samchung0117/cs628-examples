// Section-03-Ex02-App.js
// Source: https://react.dev/learn/describing-the-ui#writing-markup-with-jsx
// JSX elements look like HTML tags, but they represent React components or HTML elements.
function TodoList() {
    return (
      <>
        <h1>Hedy Lamarr's Todos</h1>
        <img
            src="https://i.imgur.com/yXOvdOSs.jpg"
            alt="Hedy Lamarr"
            class="photo"
        />
        <ul>
            <li>Invent new traffic lights</li>
            <li>Rehearse a movie scene</li>
            <li>Improve spectrum technology</li>
        </ul>
      </>
    );
  }
  
  function App() {
    return (
      <section>
        <h1>Todo List</h1>
        <TodoList />
      </section>
    );
  }
  
  export default App;