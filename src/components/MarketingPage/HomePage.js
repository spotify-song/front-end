import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import MobileNavbar from "./mobileNavbar";
import Content from "./Content";
import Footer from "./Footer";

const HomePge = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <MobileNavbar />
      <Content />
      <Footer />
    </div>
  );
};

export default HomePge;
