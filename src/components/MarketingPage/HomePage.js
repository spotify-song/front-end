import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MobileNavbar from "./mobileNavbar";
import Content from "./Content";

const HomePge = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MobileNavbar />
      <Content />
    </div>
  );
};

export default HomePge;
