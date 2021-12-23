import React from 'react';
import './NavBar.scss';

export default function NavBar() {
    return (
        <div className="topnav">
            <a href="#home" className="logo">Athena Square</a>
            <a href="#contact" className="right-nav">Contact</a>
            <a href="#about" className="right-nav">About</a>
        </div>
    );
}