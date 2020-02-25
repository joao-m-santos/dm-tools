import React from "react";
import Note from "./Note";
import "./Notes.scss";

const Notes = () => {
    return (
        <div className="notes">
            <h3>Notes</h3>

            <Note />
        </div>
    );
};

export default Notes;
