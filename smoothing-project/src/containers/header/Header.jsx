import React from "react";
import "./header.css";
// import imgUrl from "../../assets/heading.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="smoothing__heading section__padding">
      <div className="smoothing__heading-container ">
      <div className="smoothing__heading-circle-1"/>
      <div className="smoothing__heading-circle-2"/>
      
        <div className="smoothing__heading-content">
          <h1>Welcome to <span>Smoothen.ai</span></h1>
          <p>
          Your one-stop solution to get noise-free images! No more pixels which stand out. Only effortless smooth pictures.
          </p>
        </div>
        <div className="smoothing__heading-button">
          <Link to="/product">
          <button type="button" className="smoothing__heading-button-1">
            Try For Free
          </button>
          </Link>
          <Link to="/product_about">
          <button type="button" className="smoothing__heading-button-2">
            Learn More
          </button>
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Header;
