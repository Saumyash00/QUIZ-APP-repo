import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="social-links">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <a href="#"><FaTwitter /></a>
        </div>

        {/* Quick Links */}
        <div className="links">
          <div>
            <h3>Quick Links</h3>
            <a href="#">Resources</a>
            <a href="#">Join Us</a>
          </div>

          <div>
            <h3>Company</h3>
            <a href="#">Our Trainings</a>
            <a href="#">Partners</a>
            <a href="#">Sign In</a>
          </div>

          <div>
            <h3>Resources</h3>
            <p>...</p>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="newsletter">
          <h3>Join our newsletter</h3>
          <form>
            <input type="email" placeholder="Email Address" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© 2025 QuizTBPP Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
