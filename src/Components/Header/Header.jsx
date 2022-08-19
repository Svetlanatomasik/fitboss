import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <h1>FitBoss</h1>
      <ul>

        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/news">
          <li>News</li>
        </Link>

        <Link to="/recipes">
          <li>Recipes</li>
        </Link>

        <Link to="/about-us">
          <li>About Us</li>
        </Link>

        <Link to="contact">
          <li>Contact</li>
        </Link>

      </ul>
    </div>
  );
}

export default Header;
