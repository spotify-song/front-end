import React from "react";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-inner">
        <p>
          &copy; 2020 <strong>Song.</strong>
          <span>suggester</span> all rights reserved.
        </p>
        <nav className="icons">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare />
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
