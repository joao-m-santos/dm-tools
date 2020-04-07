import { Dispatch } from "redux";
import { connect } from "react-redux";

import Main from "./Main";
import { rootReducerType } from "../../store/index";
import { newCampaign, setCampaigns } from "../../store/campaigns/actions";
import { Campaign } from "../../store/campaigns/types";

const mapStateToProps = (state: rootReducerType) => ({
    token: state.auth.token,
    user: state.auth.user,
    campaigns: state.campaigns.campaigns,
    current: state.campaigns.current
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCampaigns: (campaigns: Array<Campaign>) => {
        dispatch(setCampaigns(campaigns));
    },
    newCampaign: (campaign: Campaign) => {
        dispatch(newCampaign(campaign));
    }
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
