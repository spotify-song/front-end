import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png';

const Navbar = () => {
   return (
      <nav className="Navbar">
         <Link to="/">
            <img src={logo} alt="Top Sounds logo"/>
         </Link>
         <Link to="/">sign in</Link>
      </nav>
   )
}

export default Navbar;