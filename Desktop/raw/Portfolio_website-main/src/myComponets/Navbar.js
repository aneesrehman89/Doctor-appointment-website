import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../App.css"; 
import logo from "../Pics/new.png";

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-dark Navbar mx-auto fixed-top">
        <div className="container">
          <img src={logo} style={{ height: '80px' }} className="logo" alt="logo" />
          <Link className="navbar-brand fs-2" style={{ height: '50px' }} to="/">
            Anees Ur Rehman
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 me-auto">
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/About"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/MyResume"
                >
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link fs-5 textColor"
                  aria-current="page"
                  to="/Portfolio"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-5 textColor" to="/Contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
