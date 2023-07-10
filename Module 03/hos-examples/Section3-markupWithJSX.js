// https://react.dev/learn/describing-the-ui#writing-markup-with-jsx

function TodoList() {
    return (
      // This doesn't quite work!
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        class="photo"
      >
      <ul>
        <li>Invent new traffic lights
        <li>Rehearse a movie scene
        <li>Improve spectrum technology
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