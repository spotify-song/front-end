import React, { useEffect, useState } from "react";
// import logo from "../../imgs/logo.jpeg";
import logo from "../../imgs/LogoMakr_9QgzSt.png";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  //   const toggleForm = () => {};

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      if (window.scrollY === 0) {
        setScrolling(false);
      }
    });
  }, []);

  const isUserScrolling = scrolling
    ? "navbar-wrapper scroll-color"
    : "navbar-wrapper";
  return (
    <div className={isUserScrolling}>
      <div className="Navbar">
        <div className="logo-wrapper">
          {/**
       <img src={logo} alt="restaurant logo" />
      */}
          <img src={logo} alt="restaurant logo" />

          {/**
       <h1>felipitos</h1>
      */}
          <h2>Spotify SongSuggester</h2>
        </div>
        <nav className="links">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/about" exact activeClassName="active">
            about
          </NavLink>
          <NavLink to="/login" exact activeClassName="active">
            login
          </NavLink>
          <NavLink to="/signup" exact activeClassName="active">
            sign up
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
