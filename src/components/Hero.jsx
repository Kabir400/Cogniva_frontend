import React from "react";
import Banner_bg from "../assets/banner_bg.png";
import Banner from "../assets/banner_img.png";

import "../css/hero.css";
function Home() {
  return (
    <div className="hero">
      <div className="hero-section container">
        <div className="hero-text">
          <p className="tag-line">MAKE YOUR MARKS STANDOUT</p>

          <h2 className="hero-heading">
            GET BEST COURSES AT
            <br /> CHIEFEST PRICE
          </h2>
          <div className="hero-price-container">
            <span className="hero-price-text">Starts from</span>
            <span className="original-price">599₹</span>
            <span className="offer-price">199₹</span>
          </div>
          <button className="hero-btn">Get Started</button>
        </div>
        <div className="hero-img-container">
          <img src={Banner} alt="HERO-BANNER" className="hero-img" />
        </div>
      </div>
      <img src={Banner_bg} className="hero-bg" />
    </div>
  );
}

export default Home;
