import React from 'react';
import { Link } from 'react-router-dom';
import { Session } from '../../api/requests';

export default function Navbar(props) {
  function signOut() {
    Session.destroy().then(data => {
      props.getCurrentUser();
      localStorage.removeItem("currentUser");
    });
  }
  return(
    <div className="nav-container">
      <nav className="navbar">
        <Link to="/">HomePage</Link>
        |
        <Link to="/posts">Index</Link>
        |
      </nav>
        { !props.isAuth ? ( <nav><Link to="/sign_up">Sign Up</Link> <Link to='/sign_in'>Sign In</Link></nav>)
        : (<nav><Link to="/" onClick={signOut}>Sign Out</Link> | <Link to='/sign_in'>My Profile</Link></nav>)
        }
    </div>
  )
}