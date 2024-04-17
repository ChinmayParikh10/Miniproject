import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo6.png";
import { Link } from "react-scroll";
const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 500 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <Link to="programs" smooth={true} offset={-260} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="drive" smooth={true} offset={-260} duration={500}>
            Gallery
          </Link>
        </li>

        <li>
          <a href="/blogs">Blogs</a>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-260} duration={500}>
            Contact Us
          </Link>
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
