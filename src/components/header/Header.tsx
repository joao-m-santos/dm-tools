import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <header className="header">
            <a href="/" className="no-style">
                <h1>DM Tools</h1>
            </a>
            <nav className="header__nav">
                <ul className="header__ul">
                    <li>
                        <a href="/login" className="no-style button">Log in</a>
                    </li>
                    <li>
                        <a href="/signup" className="no-style button">Sign up</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
