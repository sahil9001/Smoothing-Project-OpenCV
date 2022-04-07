import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.svg";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const Menu = () => (
  <>
    <p>
      <Link to="/">
        <span className="un">Home</span>
      </Link>
    </p>
    <p>
      <Link to="/product">
        <span className="un">Product</span>
      </Link>
    </p>
    
    <p>
      <Link to="/contact">
        <a href="#contact">
          <span className="un">Contact</span>
        </a>
      </Link>
    </p>
  </>
);
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="smoothing__navbar">
      <div className="smoothing__navbar-links">
        <div className="smoothing__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="smoothing__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="smoothing__navbar-login">
        <Link to="/contact">
        <button type="button"> Contact </button>
        </Link>
      </div>
      <div className="smoothing__navbar-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="smoothing__navbar-menu_container scale-up-center">
            <div className="smoothing__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
