// BlogPage.js
//card-->1)like,comment and share tags. 2)zooming the pic while on it  3)while hovering changing the color of 'read more'
// import React from 'react';
// import './BlogPage.css';

// function BlogPage1(){
//     return(
//         <div className="card-container">
//             <img className='card-img' src="./card1.jpg"></img>
//             <h1 className='card-title'>Card Title</h1>
//             <p className='card-date'>Date</p>
//             <p className='card-description'>Card discription. add more details</p>
//             <a href="#" className='card-btn'>Read More</a>
//         </div>
//     );
// }
// export default BlogPage1;

import React from "react";
import "./BlogPage.css";
import img1 from './card1.jpg';
import img2 from './card2.jpg';
import img3 from './card3.jpg';


function BlogPage1(){
    return(
        <div className="body">
        <div id='card-area'>
            <div className="wrapper">
                <div className='box-area'>
                    <div className="box">
                        <img src={img1}></img>
                        <div className='overlay'>
                            <h3>Empowering Communities</h3>
                            <p>Discover how our initiatives are making a positive impact and empowering communities through sustainable projects
                            </p>
                            <a href='#' target="_blank">Read More</a> 
                           
                            

                        </div>
                    </div>
                    <div className="box">
                        <img src={img2}></img>
                        <div className='overlay'>
                            <h3>Innovation and Sustainability</h3>
                            <p>Explore innovative solutions and sustainability practices that are driving positive change and environmental stewardship.</p>
                            <a href='#'>Read More</a>

                        </div>
                    </div>
                    <div className="box">
                        <img src={img3}></img>
                        <div className='overlay'>
                            <h3>Education for All</h3>
                            <p>Learn about our commitment to providing quality education and creating opportunities for underprivileged children.</p>
                            <a href='#'>Read More</a>

                        </div>
                    </div>
                    

                </div>

            </div>

        </div>
        </div>
    );
}
export default BlogPage1;
