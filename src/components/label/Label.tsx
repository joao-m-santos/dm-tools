import React from "react";
import "./Label.scss";

interface LabelProps {
    type?: string;
    children?: any;
}

const Label: React.FC<LabelProps> = (props: LabelProps) => {
    return <span className={`label${props.type ? " label--" + props.type : ""}`}>{props.children}</span>;
};

export default Label;
