import React,{useRef} from 'react'
import './Testimonial.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonial = () => {

    const slider=useRef();
    let tx=0;
const slideForward =()=>{
    if(tx>-50){
        tx-=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}
const slideBackward =()=>{
    if(tx<0){
        tx+=25;
    }
    slider.current.style.transform=`translateX(${tx}%)`;
}


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
        <ul ref={slider}>
            <li>
               <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt=""/>
                    <div>
                    <h3>Rosie Ann</h3>
                    <span>GiveHope,India</span>
                    </div>
                </div>
                <p>"FundCommunity has been an invaluable resource for GiveHope NGO, 
                    providing a seamless platform for us to promote our initiatives and 
                    connect with donors. The user-friendly interface and robust features
                    have streamlined our fundraising efforts, enabling us to make a greater 
                    impact in the communities we serve. With its commitment to transparency and support, 
                    FundCommunity has become an essential partner in our mission to bring hope and positive 
                    change to those in need."</p>
                </div> 
            </li>
            <li>
               <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt=""/>
                    <div>
                    <h3>William Jackson</h3>
                    <span>HelpAlways,India</span>
                    </div>
                </div>
                <p>"Helpalways greatly appreciates FundCommunity's platform, 
                    which has revolutionized our outreach efforts. The intuitive 
                    interface and comprehensive tools have empowered us to effectively 
                    engage with donors and expand our reach. FundCommunity's dedication 
                    to transparency and impact amplifies our ability to fulfill our mission 
                    of serving those in need. We're grateful for their partnership in our ongoing 
                    journey to make a difference in the world."</p>
                </div> 
            </li>
            <li>
               <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt=""/>
                    <div>
                    <h3>Susan Glass</h3>
                    <span>CareIndia,India</span>
                    </div>
                </div>
                <p>"CareIndia expresses sincere appreciation to FundCommunity 
                    for its steadfast backing in our initiatives. The platform's 
                    pioneering features have facilitated our outreach, fostering 
                    connections with benefactors and propelling our humanitarian 
                    endeavors forward. With FundCommunity's commitment to transparency 
                    and collaborative ethos, we've achieved notable progress in our quest 
                    to uplift communities and effect positive change across India. 
                    Together,we're forging a path toward a more inclusive and equitable future."</p>
                </div> 
            </li>
            <li>
               <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt=""/>
                    <div>
                    <h3>Eddie Howard</h3>
                    <span>SmileFoundation,India</span>
                    </div>
                </div>
                <p>"SmileFoundation extends its heartfelt 
                    thanks to FundCommunity for being a pivotal 
                    ally in our journey. The platform's innovative 
                    tools have empowered us to extend our reach, engage 
                    with supporters, and further our mission of empowering 
                    underprivileged children and families. With FundCommunity's 
                    unwavering dedication to transparency and shared values, we've 
                    been able to make significant strides in our efforts to bring smiles 
                    to countless faces. Together, we're creating a brighter, more hopeful 
                    future for all."</p>
                </div> 
            </li>
        </ul>
        </div>
    </div>
  )
}

export default Testimonial