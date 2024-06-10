import React from "react";
import '../App.js';
import './Header.css';

function Header() {
    return (
        <header className="header">
        <img src="/pictures/Smile Spreaders Banner.png" alt="logo"/>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;