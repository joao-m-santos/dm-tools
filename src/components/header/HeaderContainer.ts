import { Dispatch } from "redux";
import { connect } from "react-redux";

import Header from "./Header";
import { rootReducerType } from "../../store/index";
import { newCampaign, setCampaigns, setCurrent } from "../../store/campaigns/actions";
import { Campaign } from "../../store/campaigns/types";

const mapStateToProps = (state: rootReducerType) => ({
    campaigns: state.campaigns.campaigns,
    current: state.campaigns.current
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCampaigns: (campaigns: Array<Campaign>) => {
        dispatch(setCampaigns(campaigns));
    },
    setCurrent: (campaign: Campaign) => {
        dispatch(setCurrent(campaign));
    },
    newCampaign: (campaign: Campaign) => {
        dispatch(newCampaign(campaign));
    }
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
