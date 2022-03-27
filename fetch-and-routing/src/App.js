import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

import Home from "./components/Routes/Home"

import About from "./components/Routes/About"

import Profile from "./components/Routes/Profile"
import Users from "./components/Routes/User"

function App() {

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <br />
        <Link to="/About">About</Link>
        <br />
        <Link to="/Profile">Profile</Link>
        <br />
        <Link to="/Users">Users</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/about" element={<About></About>}/>
        <Route path="/Profile/:id" element={<Profile></Profile>}/>
        <Route path="/Users" element={<Users></Users>}/>
        <Route path="/*" element={Error()} />
      </Routes>
    </Router>
  );
}

export default App;

