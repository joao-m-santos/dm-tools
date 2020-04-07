import React from "react";
import { Link } from "react-router-dom";
import "./SideNav.scss";

const SideNav = () => {
    return (
        <div className="sidenav">
            <div className="sidenav__new">
                <button type="button" className="button button--full button--primary">
                    + NEW
                </button>
            </div>

            <ul className="sidenav__nav">
                <li>
                    <Link to="/chapters" className="no-style">
                        Chapters
                    </Link>
                </li>
                <li>
                    <Link to="/encounters" className="no-style">
                        Encounters
                    </Link>
                </li>
                <li>
                    <Link to="/scripts" className="no-style">
                        Scripts
                    </Link>
                </li>
            </ul>

            <div className="sidenav__author">
                Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
                <Link to="https://joao-m-santos.github.io/" className="no-style">
                    <strong>JOAO</strong>
                </Link>{" "}
                &bull; 2020
            </div>
        </div>
    );
};

export default SideNav;
