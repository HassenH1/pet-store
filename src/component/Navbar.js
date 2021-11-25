import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [className, setClassName] = useState();
  const [navColor, setNavColor] = useState();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setClassName("bg-light");
      setNavColor("text-black");
    } else {
      setClassName("bg-transparent");
      setNavColor("text-white");
    }
  }, [location]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light fixed-top ${className}`}
      // className="navbar navbar-expand-lg navbar-light position-sticky bg-transparent"
      // className="navbar navbar-expand-lg navbar-light fixed-top bg-light"
      // className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent"
      id="navbar"
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{
            fontFamily: "Yellowtail, cursive",
            color: "#DC143C",
            fontSize: "32px",
            letterSpacing: "6px",
          }}
        >
          Paws!
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
              <Link to="/" className={`nav-link ${navColor}`}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shopall" className={`nav-link ${navColor}`}>
                Shop All
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shoppingcart">
                <i
                  className={`fa fa-shopping-cart ${navColor}`}
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
