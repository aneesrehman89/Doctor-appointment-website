import React from 'react'
import '../css/Footer.css'
import logo from '../assets/footer/footerLogo.png';
import face from '../assets/footer/facebook.png';
import email from '../assets/footer/email.png';
import linkedin from '../assets/footer/linkedin.png';
import twitter from '../assets/footer/twitter.png';
import { Link } from 'react-router-dom';

const Footer = () => {
 return (
  <>
   <div className="footer-parent">
    <div className="App-parent-container">
     <div className="content-container">
      <div className='footer-logo'>
       <img src={logo} alt="health-icon" />
       <h2>Health-Hub</h2>
      </div>
      <p> Your trusted partner in health and wellness. We aim to provide comprehensive and accessible resources to support your journey toward a healthier, happier life. Connect with us for expert guidance, updates, and tools tailored to your needs. </p>
      <div className="container-logo">
       <a href="https://www.facebook.com/" target='_blank' rel="noopener noreferrer"><img src={face} alt="logo" /></a> 
       <a href="https://www.gmail.com/" target='_blank' rel="noopener noreferrer"> <img src={email} alt="logo" /></a> 
       <a href="https://www.LinkedIn.com/" target='_blank' rel="noopener noreferrer"><img src={linkedin} alt="logo" /></a> 
      <a href="https://www.twitter.com/" target='_blank' rel="noopener noreferrer"> <img src={twitter} alt="logo" /></a> 
      </div>
     </div>
     <div className="personal-info">
      <div className="company-info">
       <h3>Company</h3>
       <ul>
        <li><Link to="/" className='link'>Home</Link></li>
        <li> <Link to="/docAppointment" className='link'>Doctors</Link></li>
        <li><Link to="/about" className='link'>About</Link></li>
        <li><Link to="/contact" className='link'>Contact Us</Link></li>
       </ul>
      </div>

      <div className="your-info">
       <h3>Get In Touch</h3>
       <h4>Email Us:</h4>
       <p>Info@healthHub.com</p>
       <h4>Phone:</h4>
       <p>+44 (0)800 511 5586 (UK)</p>
      </div>

     </div>
    </div>
    
    <div className="footer">
     <hr/>
     <p>Copyright &copy; 2024 HH Ltd.All right reserved</p>
    </div>
   </div>
  </>
 )};

export default Footer;
