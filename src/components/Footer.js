import React from 'react'
import '../styles/Footer.css';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer"> 
      <FaInstagram className="icons"/> <FaTwitter className="icons"/> <FaFacebook className="icons"/>
    </div>
  )
}

export default Footer