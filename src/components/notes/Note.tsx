import React, { useState, useEffect, useRef } from "react";
import "./Notes";
import { generatePlaceholder } from "../../utils";

const Note = () => {
    const [placeholder, setPlaceholder] = useState<string>("");
    const [height, setHeight] = useState<number>(128);

    const textareaRef: React.RefObject<HTMLTextAreaElement> = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        generatePlaceholder("notes").then((placeholder: string) => setPlaceholder(placeholder));
    }, []);

    useEffect(() => {
        textareaRef.current && _calculateHeight(textareaRef.current);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [height]);

    const handleTextareaChange = (e: React.ChangeEvent) => {
        if (textareaRef.current) _calculateHeight(textareaRef.current);
    };

    const handleTextareaBlur = (e: React.FocusEvent) => {
        if (textareaRef.current && textareaRef.current.value) {
            // save the note
            // spawn a new note
        }
    };

    const _calculateHeight = (textarea: HTMLTextAreaElement): void => {
        if (textarea.clientHeight < textarea.scrollHeight) setHeight(height + 16);
    };

    return (
        <div className="note">
            <textarea
                style={{ height: height + "px" }}
                onChange={handleTextareaChange}
                onBlur={handleTextareaBlur}
                placeholder={placeholder}
                ref={textareaRef}
            ></textarea>
        </div>
    );
};

export default Note;
