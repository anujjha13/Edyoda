// Navbar.js
import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-section">
        <div className="logo">
          <img src="/assets/logo.png" alt="Edyoda" /> 
        </div>
        <div className="options">
          
          <div className="courses">
            <text> Courses </text> <img src="/assets/DropDown.png" alt="DropIcon"/>  
          </div>
       
          <div className="courses">
             <text> Programs</text>
             <img src="/assets/DropDown.png" alt="DropIcon" />  
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="search">
          
          <img src="/assets/search.png" alt="search"/>
        </div>
        <div className="auth-buttons">
          <text>Log in</text>
          <button><b>Join Now</b></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

