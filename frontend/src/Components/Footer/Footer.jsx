import React from 'react'
import './Footer.css'
import logo from '../Assets/logo1.png'
import insta_logo from '../Assets/insta_logo.png'
import whatsapp_logo from "../Assets/whatsapp-icon.png"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" width="40px" height="40px" />
            <p>SHOPPER</p>
            <ul className="footer-links">
                <li>Products</li>
                <li>Company</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icons">
                <div className="footer-icons-container">
                    <img src={insta_logo} alt="" width="20px" height="20px"/>
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt="" width="20px" height="20px" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_logo} alt="" width="20px" height="20px" />
                </div>
            </div>  
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 -All Right Reserved</p>
            </div>
        </div>

    </div>
  )
}

export default Footer
