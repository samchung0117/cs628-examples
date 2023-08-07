// Section 3 - MemoryRouter.js
// https://reactrouter.com/en/main/router-components/memory-router#memoryrouter

import React, { Component } from 'react';
import { MemoryRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Details from './Details';
import './App.css';

class App extends Component {
  render() {
    return (
      <MemoryRouter>
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
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details />} />
            </Routes>
          </div>
        </div>
      </MemoryRouter>
    );
  }
}

export default App;