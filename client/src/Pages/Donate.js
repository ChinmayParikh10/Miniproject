import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Navbar from "../Components/NavbarFixed/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Donate.css";
import { QRCode } from "react-qrcode-logo";
import postimg from "../assets/postimg.png";
const Donate = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/campaigns");
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllPosts();
  }, []);

  const [money, setMoney] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const generateQR = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="page-container">
        <h1 className="title_donate">Donate to Campaigns</h1>
        <div className="posts">
          {posts.map((post) => (
            <div key={post.title} className="post-card">
              <img className="post-cover" src={post.image} alt="" />
              <div className="post-content">
                <h2 className="post-title">{post.title}</h2>
                <p className="post-description">
                  Description <br></br>
                  {post.description}
                </p>
                <div className="post-footer">
                  <span className="post-goal">₹Goal: {post.goal}</span>
                  <button
                    className="donate-button btn dark-btn"
                    onClick={generateQR}
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        {showPopup && (
          <div className="popup">
            <div className="popup-inner">
              <span className="close" onClick={closePopup}>
                &times;
              </span>
              <h2>FundCommunity</h2>
              <QRCode
                value={`upi://pay?pa=vishnuvpk05@oksbi&pn=FundCommunity&tn=cftrhwetaw4gta&am=${money}`}
                size="300"
                logoImage={postimg}
                logoWidth="80"
                logoHeight="100"
                logoOpacity="1"
              />
              <p>Scan the code using PhonePe, Google Pay, or Paytm</p>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default Donate;
