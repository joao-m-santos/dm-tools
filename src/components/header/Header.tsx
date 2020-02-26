import React from "react";
import "./Header.scss";
import { Campaign } from "../../store/campaigns/types";

interface HeaderProps {
    campaigns: Array<Campaign> | null;
    current: Campaign | null;
    setCampaigns: (campaigns: Array<Campaign>) => void;
    setCurrent: (campaign: Campaign) => void;
    newCampaign: (campaign: Campaign) => void;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/" className="no-style">
                    <h1>DM Tools</h1>
                </a>
            </div>
            <div className="header__content">
                <div className="header__campaign">
                    <h4>{props.current?.name}</h4>
                </div>
                <nav className="header__nav">
                    <ul className="header__ul">
                        <li>
                            <a href="/login" className="no-style button">
                                Log in
                            </a>
                        </li>
                        <li>
                            <a href="/signup" className="no-style button">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
