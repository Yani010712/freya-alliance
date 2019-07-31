import React from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";

const Navigation = () => {
  return (
    <div>
      <nav className="navbar-pink navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a className="navbar-brand mr-auto" href="/">
            <img src="https://getbootstrap.com/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
            The Freya Alliance
        </a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-item nav-link active" to="/#home">
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#products">
              Products
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#news">
              News
            </NavLink>
            <NavLink className="nav-item nav-link" to="/#reviews">
              Reviews
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
