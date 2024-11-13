// Section05-Ex02-App.js
// Example of a stateful component:
import React from 'react';
import React, { Component } from 'react';

class Counter extends Component {
    constructor (props) {
        super(props);
        this.state = {
            count: 0
        };
    }
  
    increment () {
        this.setState( { count:  this.state.count + 1 } );
    }

    render () {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

function App() {
  return (
    <div>
        <Counter />
    </div>
  );
}

export default App;