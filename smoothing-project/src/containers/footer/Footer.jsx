import React from 'react'
import './footer.css';
import logo from "../../assets/logo.svg";
import twitter from "../../assets/twitter.svg";
import telegram from "../../assets/telegram.svg";
import github from "../../assets/github.svg";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className="smoothing__footer section__padding">
        <div className='smoothing__footer-line'/>
      <div className="smoothing__footer-links">
      
      <div className="smoothing__footer-links-div">
          <img src={logo} width="50"/>
          
          <p>Terms · Privacy Policy</p>
          
        </div>
      
        <div className="smoothing__footer-links-div">
          <h4>Resources</h4>
          <p>
            <a href="https://docs.opencv.org/3.4/d4/d13/tutorial_py_filtering.html" target="_blank" >Documentation</a></p>
          <p>Examples</p>
          <p>
            <a href="https://opencv.org/news/">
            Blog</a></p>
        </div>
        <div className="smoothing__footer-links-div">
          <h4>About</h4>
          <p>LinkedIn</p>
          <p>Github</p>
          <p>Codeforces</p>
          <p></p>
        </div>

        <div className="smoothing__footer-links_logo">
          <p>7480 Mockingbird Hill undefined</p>
          <p className="smalltext">© 2022, Sahil Silare</p>
          <div className="smoothing__footer-links_logo-social">
            <img src={twitter} alt="twitter" />
            <img src={telegram} alt="twitter" />
            <img src={github} alt="twitter" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer