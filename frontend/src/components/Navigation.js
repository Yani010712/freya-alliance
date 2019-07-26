import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#hello4">
              Hello Four
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#hello5">
              Hello Five
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#hello6">
              Hello Six
            </NavLink>
            <NavLink className="nav-item nav-link" to="/quiz">
              Quiz
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
