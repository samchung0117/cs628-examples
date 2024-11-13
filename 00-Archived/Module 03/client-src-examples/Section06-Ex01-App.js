// Section06-Ex01-App.js
// https://react.dev/learn/describing-the-ui#conditional-rendering

function Item({ name, isPacked }) {
    return (
      <li>
        {name} {isPacked && '✔'}
      </li>
    );
}
  
 function App() {
    return (
      <section>
        <h1>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true}
            name="Space suit"
          />
          <Item
            isPacked={true}
            name="Helmet with a golden leaf"
          />
          <Item
            isPacked={false}
            name="Photo of Tam"
          />
        </ul>
      </section>
    );
  }

  export default App;