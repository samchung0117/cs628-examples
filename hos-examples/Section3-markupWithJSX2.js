// https://react.dev/learn/describing-the-ui#writing-markup-with-jsx

function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
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
      <h1>Todo lIST</h1>
      <TodoList />
    </section>
  );
}

export default App;