import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md bg-light mb-4">
      <span className="navbar-brand mb-0 h1">
        <span className="blue">G</span>
        <span className="red">o</span>
        <span className="yellow">o</span>
        <span className="blue">g</span>
        <span className="green">l</span>
        <span className="red">e</span>
        &nbsp;
        <u>Books</u>
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
            <a className="nav-link pr-5" href="#">
              Search
            </a>
          </li>
          <li className="nav-item pl-5 pr-5">
            <a className="nav-link" href="#">
              Saved
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
