/** @format */

import React from "react";
import "./style.css";
import search from "../../assets/icons/search.png";

const Navbar = () => {
  return (
    <div className='navbar__container'>
      <ul className='navbarMenu'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About Us</a>
        </li>
        <li>
          <a href='#posts'>Posts</a>
        </li>
        <li>
          <a href='#contact'>Contact Us</a>
        </li>
      </ul>
      <div className='search'>
        <input type='text' placeholder='Search' />
        <img src={search} alt='search' />
      </div>
    </div>
  );
};

export default Navbar;
