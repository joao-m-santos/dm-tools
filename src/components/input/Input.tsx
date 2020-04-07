import React, { InputHTMLAttributes } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
}

const Input: React.FC<InputProps> = (props: InputProps) => {
    return (
        <div className="input__wrapper">
            <input {...props} className={`${props.className}${props.error ? " input--error" : ""}`} />
            {props.error && <div className="input__error">{props.error}</div>}
        </div>
    );
};

export default Input;
