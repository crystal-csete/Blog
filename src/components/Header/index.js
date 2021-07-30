/** @format */

import React from "react";
import "./style.css";

const Header = (props) => {
  return (
    <header className='header__container'>
      <nav className='navbar navbar-light bg-light headerMenu'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#home'>
            Home
          </a>
          <a className='navbar-brand' href='#home'>
            About Us
          </a>
          <a className='navbar-brand' href='#home'>
            Contact Us
          </a>
        </div>
      </nav>
      <div>social media links</div>
    </header>
  );
};

export default Header;
