// Section05-Ex02-App.js
// https://react.dev/learn/describing-the-ui#passing-props-to-a-component
// Image from https://i.imgur.com/YfeOqp2s.jpg

import { getImageUrl } from './utils.js'
import './css/styles.css';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

function App() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}

export default App;