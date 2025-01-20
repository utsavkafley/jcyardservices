import React from "react";
import logo from "../images/logo.png";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header id="home">
      <div class="logo">
        <img src={logo} alt="Logo" />
        <h1>JC YARD SERVICES</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
