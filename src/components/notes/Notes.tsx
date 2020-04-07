import React from "react";
import { connect } from "react-redux";
import { rootReducerType } from "../../store";
import { User } from "../../store/auth/types";

import Note from "./Note";
import "./Notes.scss";

interface NotesProps {
    user: User | null;
}

const Notes = (props: NotesProps) => {
    return (
        <div className="notes">
            <h3>Notes</h3>

            {props.user ? <Note /> : <div className="notes__placeholder">Log in to add notes!</div>}
        </div>
    );
};

const mapStateToProps = (state: rootReducerType) => ({
    user: state.auth.user
});

const NotesContainer = connect(mapStateToProps)(Notes);

export default NotesContainer;
