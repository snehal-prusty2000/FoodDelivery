import React from 'react'
import './Footer.css'
import { assets } from '../../Assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo1}alt="" className="src" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam modi accusamus deleniti, consequatur tenetur odit praesentium veritatis, nulla aut sapiente soluta aspernatur rem doloribus ipsum aliquid in, explicabo quas autem.</p>
        <div className="footer-social-icon">
            <img src= {assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 6654546-675</li>
                <li>snedhin@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copy-right'>Copyright 2024 @ snedin.com .All Right Reserved</p>
    </div>
  )
}

export default Footer
