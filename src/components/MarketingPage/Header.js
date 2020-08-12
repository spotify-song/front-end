import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../imgs/LogoMakr_9QgzSt.png";

const Header = () => {
  return (
    <header id="header" className="header-home">
      <div className="slider"></div>
      <div className="header-container">
        <div className="logo-n-links">
          <div className="logo-container">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <h2>Spotify SongSuggester</h2>
          </div>
          <nav>
            <NavLink exact to="/">
              home
            </NavLink>
            <NavLink exact to="/about">
              about
            </NavLink>
            <NavLink exact to="/sign up">
              sign up
            </NavLink>
            <NavLink exact to="/login">
              login
            </NavLink>
          </nav>
        </div>
        <div className="header-description">
          <h1>listen to all the music you love</h1>
          <span>free for the first month</span>
          <button>listen now</button>
        </div>
      </div>

      <div className="burger-menu">
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>

      <div className="mobile-nav">
        <nav className="mobile-links">
          <NavLink exact to="/home">
            home
          </NavLink>
          <NavLink exact to="/about">
            about
          </NavLink>{" "}
          <NavLink exact to="/signup">
            Sign up
          </NavLink>{" "}
          <NavLink exact to="/login">
            login
          </NavLink>
        </nav>
        <div className="logo-container mobile-logo">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <h2>Spotify SongSuggester</h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
