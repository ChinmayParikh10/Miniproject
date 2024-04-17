import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../Components/NavbarFixed/Navbar";
import white_arrow from "../assets/white-arrow.png";

import postimg from "../assets/postimg.png";
import Footer from "../Components/Footer/Footer";
const Update = () => {
  const [post, setPost] = useState({
    username: "admin",
    description: "",
    image: "",
    goal: "",
  });
  const [error, setError] = useState(false);

  const navigate = useNavigate();
  let { title } = useParams();
  title = decodeURIComponent(title);

  const handleChange = (e) => {
    setPost((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/campaigns/${title}`, post);
      navigate("/viewposts");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <>
      <Navbar />
      <br /> <br /> <br /> <br />
      <div className="contact">
        <div className="contact-col">
          <h3>Update Post</h3>
          <p>
            Launch campaigns aimed at improving our world and raising funds to
            support your cause. Whether you're passionate about environmental
            conservation, social justice, or community development, our
            user-friendly website provides the perfect platform to amplify your
            voice and mobilize support. Join us in making a tangible difference
            and creating a brighter future for all.
            <br></br>
            <img src={postimg} alt="" className="post-image" />
          </p>
        </div>
        <div className="contact-col">
          <form>
            <label>Campaign Title</label>
            <h3>{title}</h3>
            <label>Image Link</label>
            <input
              type="text"
              placeholder="Image Link"
              name="image"
              onChange={handleChange}
            />
            <label>Goal in (₹)</label>
            <input
              type="number"
              placeholder="goal"
              name="goal"
              onChange={handleChange}
            />
            <label>Description</label>
            <textarea
              rows={6}
              type="text"
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn dark-btn"
              onClick={handleClick}
            >
              Update Campaign <img src={white_arrow} alt="" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Update;
