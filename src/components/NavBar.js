import React from "react";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        RedCats Store
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Mouse
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria1">
              Mousepads
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria2">
              Teclados
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/categoria2">
              Audifonos Gamer
            </a>
          </li>
        </ul>
        <div className="ml-auto">
          {" "}
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
