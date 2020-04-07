import React, { useState, useEffect } from "react";
import "./Modal.scss";

interface MyProps {
    id: string;
    title: string;
    content: string | JSX.Element;
    action?: {
        label: string;
        callback: Function;
    };
}

const Modal: React.FC<MyProps> = (props: MyProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(props.title);
    const [content, setContent] = useState<string | JSX.Element>(props.content);
    const [classList, setClassList] = useState<string>("");

    useEffect(() => {
        document.addEventListener("modal-open__" + props.id, ((e: CustomEvent) => {
            if (e.detail) {
                e.detail.title && setTitle(e.detail.title);
                e.detail.content && setContent(e.detail.content);
                e.detail.classList && setClassList(e.detail.classList);
            }
            setOpen(true);
        }) as EventListener);
    }, [props.id]);

    const closeModal = () => setOpen(false);

    return (
        <div
            className={`modal__overlay${open ? " modal__overlay--open" : ""}`}
            onClick={(e: React.MouseEvent) => {
                if ((e.target as HTMLElement).classList.contains("modal__overlay")) closeModal();
            }}
        >
            <div className={`modal card${open ? " modal--open" : ""} ${classList}`} id={props.id}>
                <div className="modal__header">
                    <h4>{title}</h4>
                    <button
                        type="button"
                        className="button square modal__close-button"
                        onClick={closeModal}
                    >
                        x
                    </button>
                </div>
                <div className="modal__content">
                    {typeof content === "string" ? <p>{content}</p> : content}
                </div>
                <div className="modal__footer">
                    <button type="button" className="button secondary" onClick={closeModal}>
                        CLOSE
                    </button>
                    {props.action && (
                        <button
                            type="button"
                            className="button primary ml-2"
                            onClick={() => {
                                if (props.action) {
                                    props.action.callback();
                                    closeModal();
                                }
                            }}
                        >
                            {props.action.label.toUpperCase()}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;
