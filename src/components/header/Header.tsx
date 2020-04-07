import React from "react";
import { Link } from "react-router-dom";
import { Campaign } from "../../store/campaigns/types";
import { User } from "../../store/auth/types";
import "./Header.scss";

interface HeaderProps {
    user: User | null;
    current: Campaign | null;
    logout: () => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to="/" className="no-style">
                    <h1>DM Tools</h1>
                </Link>
            </div>
            <div className="header__content">
                <div className="header__campaign">
                    <h4>{props.current?.name}</h4>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        {!props.user ? (
                            <>
                                <li>
                                    <Link to="/login" className="no-style button">
                                        Log in
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/signup" className="no-style button">
                                        Sign up
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <span className="header__username">{props.user.name}</span>
                                </li>
                                <li>
                                    <button className="no-style button" onClick={() => props.logout()}>
                                        Log out
                                    </button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
