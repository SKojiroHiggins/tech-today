import React from "react"
import { Link } from "react-router-dom";


const Nav = () => {

  return (
    <header className="navbar">
      <img className="logo" src="Cars/logo.jpeg" alt="logo" />
      <ul className="nav">
        <li><Link className="current" to="/">Home</Link></li>
        <li><Link to="/Gaming">Gaming</Link></li>
        <li><Link to="/Science">Science</Link></li>
        <li><Link to="/Space">Space</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </header>
  );
}


export default Nav;