import React from 'react'
import './Programs.css'
import education from '../../assets/education2.jpeg'
import Donations from '../../assets/Donations.jpg'
import healthcare from '../../assets/healthcare.jpg'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={education} alt=""/>
            <div className="caption">
                <img src={icon1} alt=""/>
                <p>Education For Everyone</p>
            </div>
        </div>
        <div className="program">
            <img src={Donations} alt=""/>
            <div className="caption">
                <img src={icon2} alt=""/>
                <p>Charity</p>
            </div>
        </div>
        <div className="program">
            <img src={healthcare} alt=""/>
            <div className="caption">
                <img src={icon3} alt=""/>
                <p>Healthcare For Everyone</p>
            </div>
        </div>
    </div>
  )
}

export default Programs