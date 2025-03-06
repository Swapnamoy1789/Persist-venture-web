import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section - Logo and Description */}
        <div className="footer-left">
          <img
            src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
            alt="Persist Ventures"
            className="footer-logo"
          />
          <p>
            We partner with entrepreneurs and businesses to help scale and grow
            their ideas. With a diverse team skilled in every sector there is no
            business we can not help get a leg up.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">
              📷
            </a>
            <a href="#" className="social-icon">
              🔗
            </a>
            <a href="#" className="social-icon">
              ▶️
            </a>
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <h4>Quick links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Investor Application</a>
            </li>
            <li>
              <a href="#">Job Application</a>
            </li>
            <li>
              <a href="#">Apply To Startup Accelerator</a>
            </li>
            <li>
              <a href="#">Career Accelerator Program</a>
            </li>
            <li>
              <a href="#">Our team</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Legal */}
        <div className="footer-legal">
          <h4>Legal</h4>
          <ul>
            <li>
              <a href="#">Terms of service</a>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Decentralized Intelligence Agency</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>All rights reserved © 2025 persistventures.com</p>
      </div>
    </footer>
  );
};

export default Footer;
