import { Campaign, SET_CAMPAIGNS, NEW_CAMPAIGN, CampaignActionTypes, SET_CURRENT } from "./types";

export const setCampaigns = (campaigns: Array<Campaign>): CampaignActionTypes => {
    return {
        type: SET_CAMPAIGNS,
        payload: campaigns
    };
};

export const setCurrent = (campaign: Campaign): CampaignActionTypes => {
    return {
        type: SET_CURRENT,
        payload: campaign
    };
};

export const newCampaign = (campaign: Campaign): CampaignActionTypes => {
    return {
        type: NEW_CAMPAIGN,
        payload: campaign
    };
};
