import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return(
    <nav className="navbar">
      <Link to="/">HomePage</Link>
      |
      <Link to="/posts">Index</Link>
      |
      <Link to="/sign_up">Sign Up</Link>
      |
      <Link to='/sign_in'>Sign In</Link>
    </nav>
  )
}