import React from "react";
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
                    <a href="/chapters" className="no-style">
                        Chapters
                    </a>
                </li>
                <li>
                    <a href="/encounters" className="no-style">
                        Encounters
                    </a>
                </li>
                <li>
                    <a href="/scripts" className="no-style">
                        Scripts
                    </a>
                </li>
            </ul>

            <div className="sidenav__author">
                Made with <span style={{ color: "#e25555" }}>&#9829;</span> by{" "}
                <a href="https://joao-m-santos.github.io/" className="no-style">
                    <strong>JOAO</strong>
                </a>{" "}
                &bull; 2020
            </div>
        </div>
    );
};

export default SideNav;
