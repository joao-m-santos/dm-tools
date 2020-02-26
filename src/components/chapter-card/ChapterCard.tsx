import React from "react";
import { SortableElement, SortableHandle } from "react-sortable-hoc";
import "./ChapterCard.scss";
import { Chapter } from "../../store/campaigns/types";

interface ChapterCardProps extends Chapter {}

const DragHandle = SortableHandle(({ children }: { children: number }) => (
    <span className="chapter__number card__drag-handle">{children + 1}</span>
));

const ChapterCard = SortableElement((props: ChapterCardProps) => {
    return (
        <div className="chapters__card" data-index={props._index}>
            <div className="card__header">
                <DragHandle>{props._index}</DragHandle>
                <strong>{props.name}</strong>
            </div>
            <div className="card__body">
                {props.description && <p className="font-size--small">{props.description}</p>}
            </div>
            <div className="card__footer"></div>
        </div>
    );
});

export default ChapterCard;
