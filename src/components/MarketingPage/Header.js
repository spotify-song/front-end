import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <div className="inner-wrapper">
        <h1>listen to all the music you love</h1>
        <p>free for the first month</p>
        <Link to="/login">listen now</Link>
      </div>
    </header>
  );
};

export default Header;
