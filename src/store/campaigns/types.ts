export interface Chapter {
    _index: number;
    name: string;
    description?: string;
}

export interface Campaign {
    name: string;
    active: boolean;
    chapters: Array<Chapter>;
}

export interface CampaignState {
    campaigns: Array<Campaign> | null;
    current: Campaign | null;
}

export const SET_CAMPAIGNS = "SET_CAMPAIGNS";
export const SET_CURRENT = "SET_CURRENT";
export const NEW_CAMPAIGN = "NEW_CAMPAIGN";

interface CampaignAction {
    type: typeof SET_CAMPAIGNS | typeof SET_CURRENT | typeof NEW_CAMPAIGN;
    payload: Array<Campaign> | Campaign;
}

export type CampaignActionTypes = CampaignAction;
