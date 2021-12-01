import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/shoppingcart-context";

function Navbar() {
  const [navBarPosition, setNavBarPosition] = useState();
  const [navColor, setNavColor] = useState();
  const [navBackground, setNavBackground] = useState();
  const location = useLocation();
  const navRef = useRef();
  navRef.current = navBackground;
  const { totalItems } = useCart();

  useEffect(() => {
    if (location.pathname !== "/") {
      // setClassName("bg-light");
      setNavBarPosition("position-sticky");
      setNavBackground("bg-light");
      setNavColor("text-black");
    } else {
      // setClassName("bg-transparent");
      setNavBarPosition("fixed-top");
      setNavBackground("bg-transparent");
    }
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === "/") {
      document.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (location.pathname === "/") {
        document.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = () => {
    const show = window.scrollY > 700;
    if (show) {
      setNavBackground("bg-light");
    } else {
      setNavBackground("bg-transparent");
      setNavColor("white");
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light ${navBarPosition} ${navRef.current}`}
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
                {totalItems > 0 ? (
                  <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">
                    {totalItems}
                  </span>
                ) : null}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
