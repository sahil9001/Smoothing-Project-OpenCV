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
          <a href="https://www.linkedin.com/in/sahil-silare-76a65014b/">
          <p>LinkedIn</p>
          </a>
          <a href="https://github.com/sahil9001">
          <p>Github</p>
          </a>
          <a href="https://codeforces.com/profile/gigawhiz">
          <p>Codeforces</p>
          </a>
        </div>

        <div className="smoothing__footer-links_logo">
          <p>7480 Mockingbird Hill undefined</p>
          <p className="smalltext">© 2022, Sahil Silare</p>
          
        </div>
      </div>
    </div>
  )
}

export default Footer