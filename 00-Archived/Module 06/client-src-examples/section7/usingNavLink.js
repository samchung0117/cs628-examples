// Section 7 - usingNavLink.js
// https://reactrouter.com/en/main/components/nav-link#navlink
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'; // import NavLink
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
              {/* Use NavLink instead of Link */}
              <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" activeClassName="active">About</NavLink>
              </li>
              <li>
                <NavLink to="/details" activeClassName="active">Details</NavLink>
              </li>
              <li>
                <NavLink to="/team" activeClassName="active">Team</NavLink>
              </li>
            </ul>
          </nav>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/details" element={<Details />} />
              <Route path="/team" element={<Team />}>
                <Route path="member/:id" element={<Member />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;