// import React from 'react';
// import './BlogPage.css';

// function BlogPage2(){
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
// export default BlogPage2;

import React from "react";
import "./BlogPage.css";
import img4 from './card4.jpg';
import img5 from './card5.jpg';
import img6 from './card6.jpeg';
function BlogPage1(){
    return(
        <div className="body">
        <div id='card-area'>
            <div className="wrapper">
                <div className='box-area'>
                    <div className="box">
                        <img src={img4}></img>
                        <div className='overlay'>
                            <h3>Health & Wellness Initiatives</h3>
                            <p>Dive into our health and wellness programs aimed at improving the well-being of individuals and families in need.</p>
                            <a href='#'>Read More</a>

                        </div>
                    </div>
                    <div className="box">
                        <img src={img5}></img>
                        <div className='overlay'>
                            <h3>Environmental Conservation</h3>
                            <p>Explore our efforts in environmental conservation, from wildlife protection to promoting eco-friendly practices.</p>
                            <a href='#'>Read More</a>

                        </div>
                    </div>
                    <div className="box">
                        <img src={img6}></img>
                        <div className='overlay'>
                            <h3>Celebrating Volunteerism</h3>
                            <p>Celebrate the spirit of volunteerism and learn how you can contribute to meaningful causes in your community.</p>
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
