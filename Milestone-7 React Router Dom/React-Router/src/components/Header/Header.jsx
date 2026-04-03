import React from 'react';
import { NavLink } from 'react-router';
import './header.css'
const Header = () => {
  return (
    <div>
      <h2>This is Header</h2>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/laptop">Laptop</NavLink>
        <NavLink to="/mobile">Mobile</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users-2</NavLink>
      </nav>
    </div>
  );
};

export default Header;