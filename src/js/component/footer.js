import React, { Component } from "react";

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center bg-dark text-white">
    <div className="container">
      <p>
        Made with <i className="fa fa-heart text-danger" /> by{" "}
        <a href="http://www.github.com/walter10x">Walter Rivero GitHub|Walter10x</a>
      </p>
      <div className="social-icons">
        <a href="#" className="social-icon">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fa fa-whatsapp"></i>
        </a>
      </div>
    </div>
  </footer>
);



