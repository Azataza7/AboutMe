import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-lg">
        <span className="navbar-brand">My page</span>
        <div className="navbar d-flex gap-2" id="navbarNavAltMarkup">
          <NavLink to="/" className="nav-link" aria-current="page" href="#">Main</NavLink>
          <NavLink to="/education" className="nav-link">Education</NavLink>
          <NavLink to="/achieves" className="nav-link">Achievements</NavLink>
          <NavLink to="/game" className="nav-link">Game</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;