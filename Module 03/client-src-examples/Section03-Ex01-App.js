// Section-03-Ex01-App.js
// Source: https://react.dev/learn/describing-the-ui#writing-markup-with-jsx
// JSX elements look like HTML tags, but they represent React components or HTML elements.
// SyntaxError: /workspaces/cs628-hos/HOS03/client/src/App.js: Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>? (7:6)
function TodoList() {
    return (
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