// Section 2 - App.js
// https://reactrouter.com/en/main/router-components/browser-router#browserrouter
// https://reactrouter.com/en/main/components/routes
// https://reactrouter.com/en/main/route/route
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Details from './Details';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/details">Details</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/details" element={<Details />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;