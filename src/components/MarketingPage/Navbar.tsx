import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <p>
        <NavLink exact to="/">
          Music<span> Matches</span>
        </NavLink>
      </p>
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/about" activeClassName="active">
          about us
        </NavLink>

        {/* <NavLink exact to="/login" activeClassName="active">
          login
        </NavLink>
        <NavLink exact to="/signup" activeClassName="active">
          signup
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Navbar;
