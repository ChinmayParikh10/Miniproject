import React from 'react'
import './About.css'
import about from '../../assets/Aboutus.jpg'

const About = () => {
  return (
    <div className="about">
        <div className="about-left">
            <img src={about} alt="" className="about-img"/>
          </div>
        <div className="about-right">
        <h3>ABOUT FUNDCOMMUNITY</h3>
        <h2>Make a difference daily</h2>
        <p>At FundCommunity, we are dedicated to fostering positive change and making a meaningful 
            impact in the world. As a platform for advertisement for other organizations, 
            we provide a space for NGOs to showcase their initiatives, connect with supporters, and amplify their voices.</p>
        <p>Our mission goes beyond promotion; we also facilitate donations, enabling individuals and 
            corporations to contribute to causes they care about. With a commitment to transparency and accountability, 
            we strive to ensure that every donation reaches its intended beneficiaries.</p>  
        <p>As an NGO ourselves, we are deeply rooted in our values of compassion, integrity, and social responsibility. 
           Together with our partners and supporters, we work tirelessly to create a better, more equitable world for all.</p>
        </div>
    </div>
  )
}

export default About