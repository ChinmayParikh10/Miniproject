import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Programs from "../Components/Programs/Programs";
import Title from "../Components/Title/Title";
import About from "../Components/About/About";
import Drive from "../Components/Drive/Drive";
import Testimonial from "../Components/Testimonials/Testimonial";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subtitle="OUR PROGRAM" title="What We Offer" />
          <Programs />
          <About />
          <Title subtitle="Gallery" title="NGO drive" />
          <Drive />
          <Title subtitle="Testimonials" title="What public says" />
          <Testimonial />
          <Title subtitle="Contact Us" title="Get In Touch" />
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
