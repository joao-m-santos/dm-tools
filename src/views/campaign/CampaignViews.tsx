import React, { useEffect } from "react";
import { Campaign } from "../../store/campaigns/types";
import Label from "../../components/label/Label";
import { useHistory, Link } from "react-router-dom";
import store from "../../store";
import { setCurrent } from "../../store/campaigns/actions";

export const NoCampaigns: React.FC = () => {
    return (
        <div className="main__new-campaign">
            <p>To begin using DM Tools, please start by creating a new Campaign:</p>
            <Link to="/new-campaign" className="button button--primary">
                + NEW CAMPAIGN
            </Link>
        </div>
    );
};

interface SelectCampaignProps {
    campaigns: Array<Campaign> | null;
}

export const SelectCampaign: React.FC<SelectCampaignProps> = (props: SelectCampaignProps) => {
    const history = useHistory();

    useEffect(() => {
        store.dispatch(setCurrent(null));
    }, []);

    const handleCampaignSelection = (e: React.MouseEvent<HTMLElement>) => {
        const campaign = props.campaigns?.find((c: Campaign) => c._id === e.currentTarget.dataset.value);
        campaign && history.push("/campaign/" + campaign._id);
    };

    return (
        <div className="main__select-campaign">
            <p>Select a Campaign:</p>
            <div className="select-campaign__container">
                {props.campaigns?.map((c: Campaign, i: number) => (
                    <div key={i} className="select-campaign" data-value={c._id} onClick={handleCampaignSelection}>
                        <div className="select-campaign__header">
                            <h4>{c.name}</h4> <Label type={c.status}>{c.status}</Label>
                        </div>
                        <div className="select-campaign__body">
                            <div className="select-campaign__info">
                                <h5>PCs</h5>
                                <div>{c.pcs.length}</div>
                            </div>
                            <div className="select-campaign__info">
                                <h5>Chapters</h5>
                                <div>{c.chapters.length}</div>
                            </div>
                            <div className="select-campaign__info">
                                <h5>Encounters</h5>
                                <div>{c.encounters.length}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
