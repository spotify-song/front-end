import React from "react";
import FormModal from "./FormModal";

const Header = () => {
  return (
    <div className="Header">
      <header>
        <h1>
          combine your favorite playlist with friends or simply by entering an
          artist name
        </h1>
        {/**
      <button>try it now</button>
      */}
        <FormModal />
      </header>
    </div>
  );
};

export default Header;
