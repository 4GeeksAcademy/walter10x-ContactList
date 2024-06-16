import React from "react";
import "../../styles/footer.css"

export const Footer = () => (
  <footer className="footer mt-auto py-3 bg-dark text-white">
    <div className="container text-center">
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.github.com/walter10x" className="text-white">Walter Rivero GitHub|Walter10x</a>
      </p>
      <div className="social-icons d-flex justify-content-center">
        <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-tiktok"></i>
        </a>
        <a href="https://discord.gg/tucuenta" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-discord"></i>
        </a>
        <a href="https://github.com/walter10x" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-github-square"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=+34-602-438-307" target="_blank" rel="noopener noreferrer" className="text-white me-3">
          <i className="fab fa-whatsapp-square"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
