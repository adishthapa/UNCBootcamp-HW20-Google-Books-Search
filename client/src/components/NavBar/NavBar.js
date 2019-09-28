import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light mb-4">
      <span className="navbar-brand mb-0 h1">
        <Link to="/">
          <span className="blue">G</span>
          <span className="red">o</span>
          <span className="yellow">o</span>
          <span className="blue">g</span>
          <span className="green">l</span>
          <span className="red">e</span>
          &nbsp; Books
        </Link>
      </span>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/search-books">Search</Link>
          </li>
          <li className="nav-item pl-5 pr-5">
            <Link to="/saved-books">Saved</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
