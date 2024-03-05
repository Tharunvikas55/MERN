import React from 'react'
import './Footer.css'
import logo from '../Assets/logo1.png'
import insta_logo from '../Assets/insta_logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-logo">
            <img src={logo} alt="" />
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
                    <img src={insta_logo} alt="" />
                </div>
            </div>  
        </div>

    </div>
  )
}

export default Footer
