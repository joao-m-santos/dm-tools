import {
    CampaignState,
    CampaignActionTypes,
    NEW_CAMPAIGN,
    SET_CAMPAIGNS,
    SET_CURRENT
} from "./types";

const initialState: CampaignState = {
    campaigns: null,
    current: null
};

export const campaignReducer = (
    state: CampaignState = initialState,
    action: CampaignActionTypes
): CampaignState => {
    switch (action.type) {
        case SET_CAMPAIGNS:
            console.log("::: Action: SET_CAMPAIGNS");
            return Object.assign({}, state, {
                campaigns: action.payload
            });
        case SET_CURRENT:
            console.log("::: Action: SET_CURRENT");
            return Object.assign({}, state, {
                current: action.payload
            });
        case NEW_CAMPAIGN:
            console.log("::: Action: NEW_CAMPAIGN");
            return Object.assign({}, state, {
                campaigns: state.campaigns ? [...state.campaigns, action.payload] : [action.payload]
            });
        default:
            return state;
    }
};
