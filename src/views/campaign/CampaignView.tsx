import React, { useState } from "react";
import { SortableContainer } from "react-sortable-hoc";
import "./Campaign.scss";
import { Campaign, Chapter } from "../../store/campaigns/types";
import ChapterCard from "../../components/chapter-card/ChapterCard";
import { arrayMove } from "../../utils";

interface CampaignProps extends Campaign {}

// const SortableList = SortableContainer(({ items }) => {
//     return (
//         <div className="chapters__list">
//             {items.map((chapter: Chapter) => (
//                 <ChapterCard key={chapter.index} {...chapter} />
//             ))}
//         </div>
//     );
// });

const SortableList = SortableContainer(({ children }: { children: any }) => {
    return <div className="chapters__list">{children}</div>;
});

const CampaignView: React.FC<CampaignProps> = (props: CampaignProps) => {
    const [chapterList, setChapterList] = useState<Array<Chapter>>(props.chapters);

    const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
        setChapterList(arrayMove(chapterList, oldIndex, newIndex));
        setTimeout(() => {
            console.log(chapterList);
        }, 250);
    };

    return (
        <div className="campaign">
            <div className="campaign__header">
                <h2 className="header__name">{props.name}</h2>
                <div className="header__actions">
                    <button type="button" className="button">
                        EDIT
                    </button>
                    <button type="button" className="button">
                        START SESSION
                    </button>
                </div>
            </div>

            <div className="campaign__chapters">
                <h4>Chapters</h4>
                <SortableList onSortEnd={onSortEnd} useDragHandle axis="xy">
                    {chapterList.map((chapter: Chapter) => {
                        return (
                            <ChapterCard key={chapter._index} index={chapter._index} {...chapter} />
                        );
                    })}
                </SortableList>
            </div>
        </div>
    );
};

export default CampaignView;
