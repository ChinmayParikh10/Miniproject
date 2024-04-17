import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Components/NavbarFixed/Navbar";
import Footer from "../Components/Footer/Footer";
import "./Viewposts.css";
const Viewposts = () => {
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

  console.log(posts);

  const handleDelete = async (title) => {
    try {
      await axios.delete(`http://localhost:3001/campaigns/${title}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {/*<div className="posts">
        {posts.map((post) => (
          <div key={post.title} className="post">
            <img src={post.cover} alt="" />
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <span>${post.goal}</span>
            <button className="delete" onClick={() => handleDelete(post.title)}>
              Delete
            </button>
            <button className="update">
              <Link
                to={`/update/${post.title}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
    */}
      <Navbar />
      <br /> <br /> <br /> <br /> <br /> <br />
      <div className="page-container">
        <h1 className="title_donate">Dashboard</h1>
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
                  <span className="post-goal">Goal: ${post.goal}</span>
                  <button
                    className="delete btn dark-btn"
                    onClick={() => handleDelete(post.title)}
                  >
                    Delete
                  </button>
                  <button className="update btn dark-btn">
                    <Link
                      to={`/update/${post.title}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      Update
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Viewposts;
