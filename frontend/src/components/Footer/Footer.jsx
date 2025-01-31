import React from "react";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="footer-top">
          <h2>SUBSCRIBE TO OUR NEWSLETTER!</h2>
          <p>STAY ALWAYS IN TOUCH!</p>
          <div className="subscribe">
            <input type="email" placeholder="Enter your email..." />
            <button>➜</button>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-section address">
            <h3>OUR ADDRESS</h3>
            <p>LB Nagar ,500070 Hyderabad Near Metro Station 3-99 </p>
            <h3>CONTACT INFO</h3>
            <p>
              <a href="mailto:mail@evento.com">mail@kalyan.com</a>
            </p>
            <p>(0) 9392491012</p>
          </div>

          <div className="footer-section useful-links">
            <h3>USEFUL LINK</h3>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">ABOUT US</a></li>
              <li><a href="#">PROJECTS</a></li>
              <li><a href="#">HISTORY</a></li>
              <li><a href="#">BLOG</a></li>
            </ul>
          </div>

          <div className="footer-section services">
            <h3>SERVICES</h3>
            <ul>
              <li><a href="#">FESTIVALS</a></li>
              <li><a href="#">CONFERENCE</a></li>
              <li><a href="#">DECORATION</a></li>
              <li><a href="#">CATERING</a></li>
              <li><a href="#">MUSIC EVENT</a></li>
            </ul>
          </div>

          <div className="footer-section social">
            <h3>FOLLOW US</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-dribbble"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright By KalyanEvent. © 2024. All Rights Reserved.</p>
          <p><a href="#">Terms & Conditions</a> | <a href="#">Privacy Policy</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
