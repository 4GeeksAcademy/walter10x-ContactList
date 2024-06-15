import React, { Component } from "react";



export const Footer = () => (
    <footer className="footer mt-auto py-3 text-center">
        <div className="social-icons">
            <a href="https://www.instagram.com/tu_instagram" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com/tu_twitter" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/tu_facebook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
            </a>
            <a href="https://wa.me/tu_numero_de_whatsapp" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
            </a>
        </div>
        <p>
            Made with <i className="fa fa-heart text-danger" /> by{" "}
            <a href="http://www.github.com/walter10x">Walter Rivero GitHub|Walter10x</a>
        </p>
    </footer>
);

