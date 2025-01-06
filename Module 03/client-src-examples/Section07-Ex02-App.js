// Section07-Ex02-App.js
// https://react.dev/learn/describing-the-ui#rendering-lists
import { people } from './data.js';
import { getImageUrl } from './utils.js';
import './css/styles.css';

function App() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}:</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Scientists</h1>
      <ul>{listItems}</ul>
    </article>
  );
}

export default App;