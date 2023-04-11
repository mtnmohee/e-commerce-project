import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessoies</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor
            ducimus aperiam totam temporibus dolorem officia minima deleniti
            voluptas iste? Nulla cumque maxime voluptate eius deleniti earum ut
            ipsa corporis.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolor
            ducimus aperiam totam temporibus dolorem officia minima deleniti
            voluptas iste? Nulla cumque maxime voluptate eius deleniti earum ut
            ipsa corporis.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <div className="logo">Lamastore</div>
          <div className="copyright">© Copyright 2023, All Rights Reserved</div>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
