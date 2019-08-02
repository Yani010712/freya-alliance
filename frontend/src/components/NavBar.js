import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return(
    <nav className="shrink" id="nav" className="navbar-cont" >
      <div className="navbar-cont">
        <NavLink className="nav-item nav-link active" to="/#home">
          Home
        </NavLink>
        <NavLink className="nav-item nav-link" to="/news">
          News
        </NavLink>
        <NavLink className="nav-item nav-link" to="/reviews">
          Reviews
        </NavLink>
        <NavLink className="nav-item nav-link" to="/partnerships">
          Partnerships
        </NavLink>
        <NavLink className="nav-item nav-link" to="/quiz">
          Quiz
        </NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
