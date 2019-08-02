import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import Logo from './Logo';

const Navigation = ({ showModal }) => {
  return (
    <div>
      <nav className="navbar-pink navbar navbar-expand-lg navbar-light bg-dark fixed-top">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/#home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#products">
              Products
            </NavLink>
            <NavLink className="nav-item nav-link" to="/news">
              News
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#reviews">
              Reviews
            </NavLink>
            <NavLink to="#" className="nav-item nav-link" onClick={showModal}>
              Quiz
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
