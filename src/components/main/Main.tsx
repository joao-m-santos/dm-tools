import React, { useState, useEffect } from "react";
import "./Main.scss";
import { Campaign } from "../../store/campaigns/types";
import CampaignView from "../../views/campaign/CampaignView";

interface MainProps {
    campaigns: Array<Campaign> | null;
    current: Campaign | null;
    setCampaigns: (campaigns: Array<Campaign>) => void;
    setCurrent: (campaign: Campaign) => void;
    newCampaign: (campaign: Campaign) => void;
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const [mainState, setMainState] = useState<string>("loading");

    useEffect(() => {
        setTimeout(() => {
            const data = [
                {
                    name: "A Star Wars adventure",
                    active: true,
                    chapters: [
                        { _index: 0, name: "Chapter 1" },
                        { _index: 1, name: "Chapter 2" },
                        { _index: 2, name: "Chapter 3" },
                        { _index: 3, name: "Chapter 4" },
                        { _index: 4, name: "Chapter 5" }
                    ]
                },
                { name: "The Metal", active: false, chapters: [] }
            ];
            props.setCampaigns(data);
            const current = data.find(c => c.active);
            current && props.setCurrent(current);
        }, 1500);
    }, []);

    useEffect(() => {
        setMainState(props.campaigns ? (props.campaigns.length ? "campaign" : "new") : "loading");
    }, [props]);

    const handleNewButtonClick = () => {};

    const _renderContent = (): JSX.Element => {
        switch (mainState) {
            case "loading":
                return <div>Loading...</div>;
            case "new":
                return (
                    <div className="main__new-campaign">
                        <p>To begin using DM Tools, please start by creating a new Campaign:</p>
                        <button
                            type="button"
                            className="button button--primary"
                            onClick={handleNewButtonClick}
                        >
                            + NEW CAMPAIGN
                        </button>
                    </div>
                );
            case "campaign":
                return props.current ? (
                    <div className="main__campaign">
                        <CampaignView {...props.current} />
                    </div>
                ) : (
                    <div className="main__select-campaign">Select a Campaign:</div>
                );

            default:
                return <div>Error rendering content</div>;
        }
    };

    return (
        <>
            <main className="main">{_renderContent()}</main>
        </>
    );
};

export default Main;
