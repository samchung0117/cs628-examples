// Section 5 - NestedRouting.js
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Details from './Details';
import Team from './Team';
import Member from './Member';
import './App.css';

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
              <li>
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details />} />
              <Route path="/team" element={<Team />}>
                {/* Nested Routing */}
                <Route path="member" element={<Member />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;