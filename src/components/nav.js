import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';


const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
