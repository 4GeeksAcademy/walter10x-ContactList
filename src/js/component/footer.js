import React, { Component } from "react";
import "../../styles/footer.css"


export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <p>
      Made with <i className="fa fa-heart text-danger" /> by{" "}
      <a href="http://www.github.com/walter10x">Walter Rivero GitHub|Walter10x</a>
    </p>
    <div className="social-icons">
      <a href="https://www.facebook.com/tucuenta" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square"></i></a>
      <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
      <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
      <a href="https://www.tiktok.com/tucuenta" target="_blank" rel="noopener noreferrer"><i className="fab fa-tiktok"></i></a>
      <a href="https://discord.gg/tucuenta" target="_blank" rel="noopener noreferrer"><i className="fab fa-discord"></i></a>
      <a href="https://github.com/walter10x" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
      <a href="https://api.whatsapp.com/send?phone=+34-602-438-307" target="_blank" rel="noopener noreferrer" className="whatsapp-icon"><i className="fab fa-whatsapp-square"></i></a>
    </div>
  </footer>
);




