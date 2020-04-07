import { Dispatch } from "redux";
import { connect } from "react-redux";

import CampaignView from "./CampaignView";
import { rootReducerType } from "../../store/index";
import { Campaign } from "../../store/campaigns/types";
import { setCurrent } from "../../store/campaigns/actions";

const mapStateToProps = (state: rootReducerType) => ({
    user: state.auth.user,
    current: state.campaigns.current
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    setCurrent: (campaign: Campaign) => {
        dispatch(setCurrent(campaign));
    }
});

const CampaignContainer = connect(mapStateToProps, mapDispatchToProps)(CampaignView);

export default CampaignContainer;
