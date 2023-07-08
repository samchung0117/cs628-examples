// Section05-Ex01-App.js
// Example of a stateless component
import React from 'react';

const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;

};

function App () {
  return (
      <div>
          <Greeting name="John Doe"/>
      </div>
  );
}

export default App;