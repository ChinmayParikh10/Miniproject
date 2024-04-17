import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo6.png";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="dark-nav">
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/viewposts">Dashboard</a>
        </li>
        <li>
          <a href="/post">Post Campaign</a>
        </li>
        <li>
          <a href="/donate">
            <button className="btn">Donate</button>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
