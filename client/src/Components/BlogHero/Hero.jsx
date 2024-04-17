import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
const BlogHero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Our Blog</h1>
        <p>
          "Explore insights, stories, and updates on our latest endeavors and
          initiatives"
        </p>

        <button className="btn">
          Explore More <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  );
};
export default BlogHero;
