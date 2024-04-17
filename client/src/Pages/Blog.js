import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import BlogHero from "../Components/BlogHero/Hero";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import BlogPage1 from "./Blog/BlogPage1";
import BlogPage2 from "./Blog/BlogPage2";
import Title from "../Components/Title/Title";
const Blog = () => {
  return (
    <div>
      <div>
        <Navbar />
        <BlogHero />
        <div className="container">
          <br></br>
          <br></br>
          <section className="sec">
            <BlogPage1 />
            <BlogPage2 />
          </section>
          <hr></hr>
          <br></br>
          <Title subtitle="Contact Us" title="Get In Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Blog;
