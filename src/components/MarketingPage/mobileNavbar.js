import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  const [isMoblie, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMoblie);
  };

  useEffect(() => {
    if (isMoblie) {
      window.document.documentElement.style.overflow = "hidden";
    } else {
      window.document.documentElement.style.overflow = "auto";
    }
  }, [isMoblie]);
  return (
    <div>
      <div
        className={!isMoblie ? "burger-menu" : "burger-menu close"}
        onClick={toggleMenu}
      >
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>
      <div className={isMoblie ? "MobileNavbar show" : "MobileNavbar"}>
        <nav>
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

export default MobileNavbar;
