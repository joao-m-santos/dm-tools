import React, { useState, useEffect } from "react";
import "./Loader.css";

const Loader = () => {
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        document.addEventListener("loader-on", () => setActive(true));
        document.addEventListener("loader-off", () => setActive(false));
    }, []);

    return <div className={`loader${active ? "loader--active" : ""}`}></div>;
};

export default Loader;
