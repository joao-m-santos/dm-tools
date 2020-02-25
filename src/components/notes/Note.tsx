import React, { useState, useEffect } from "react";
import "./Notes";
import { generatePlaceholder } from "../../utils";

const Note = () => {
    const [placeholder, setPlaceholder] = useState<string>("");

    useEffect(() => {
        generatePlaceholder().then((placeholder: string) => setPlaceholder(placeholder));
    });

    return (
        <div className="note">
            <textarea placeholder={placeholder}></textarea>
        </div>
    );
};

export default Note;
