import React from "react";
import "../css/nav.css";
function Nav() {
  return (
    <div className="nav-shadow">
      <div className="container nav-bar">
        <div className="logo">Cogniva</div>
        <div className="menue-option">
          <p className="option">Home</p>
          <p className="option">About Us</p>
          <p className="option">Courses</p>
          <p className="option">Contact</p>
        </div>
        <div className="avater"></div>
      </div>
    </div>
  );
}

export default Nav;
