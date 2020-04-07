export interface Chapter {
    _index: number;
    name: string;
    description?: string;
}

export interface Encounter {
    _id: string;
    name: string;
}

export interface PC {
    _id: string;
    name: string;
}

export interface Campaign {
    _id?: string;
    name: string;
    status: string;
    chapters: Array<Chapter>;
    encounters: Array<Encounter>;
    pcs: Array<PC>;
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
    payload: Array<Campaign> | Campaign | null;
}

export type CampaignActionTypes = CampaignAction;
