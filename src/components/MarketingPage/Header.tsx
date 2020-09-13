import React from "react";
import FormModal from "./FormModal";
// import { useHistory } from "react-router-dom";

const Header = () => {
  //   const history = useHistory();

  //   const redirectTo = () => {
  //     const token = "abc";
  //     history.push(`/users/${token}`);
  //   };
  return (
    <div className="Header">
      <header>
        <h1>
          combine your favorite playlist with friends or simply by entering an
          artist name
        </h1>
        {/**
       <FormModal />
      */}
        <FormModal />

        {/**
       <button onClick={redirectTo}>try it now</button>
      */}
      </header>
    </div>
  );
};

export default Header;
