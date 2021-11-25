import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent"
      // className="navbar navbar-expand-lg navbar-light position-sticky bg-transparent"
      // className="navbar navbar-expand-lg navbar-light fixed-top bg-light"
      // className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent"
      id="navbar"
    >
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Pet Store Logo Here
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopall" className="nav-link text-white">
                Shop All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shoppingcart">
                <i
                  className="fa fa-shopping-cart text-white"
                  style={{ fontSize: "19px" }}
                ></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
