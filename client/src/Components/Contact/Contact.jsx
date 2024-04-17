import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57123dc3-29ff-4061-b416-bb32c55fa1dd");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt=""/></h3>
            <p>"We value your feedback and are here to assist you. 
                Whether you have questions, suggestions, or inquiries, 
                feel free to reach out to us. Our dedicated team at FundCommunity 
                is committed to providing support and addressing any concerns you may have. 
                You can contact us via the form below or reach us directly through email or 
                phone. Thank you for your interest in FundCommunity, and we look forward to 
                hearing from you soon!"</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@FundCommunity.ngo</li>
                    <li><img src={phone_icon} alt="" /> +91 1234567890</li>
                    <li><img src={location_icon} alt="" /> #02-71,New Building,<br/> 312393,New Delhi,India </li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="number" name='name' placeholder='Enter your mobile number' required/>
                <label>Email address</label>
                <input type="text" name='name' placeholder='Enter your email' required/>
                <label>Write your messages here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required/>
                <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt=""/></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact;