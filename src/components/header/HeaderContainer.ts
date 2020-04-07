import { Dispatch } from "redux";
import { connect } from "react-redux";

import Header from "./Header";
import { rootReducerType } from "../../store/index";
import { logout } from "../../store/auth/actions";

const mapStateToProps = (state: rootReducerType) => ({
    user: state.auth.user,
    current: state.campaigns.current
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    logout: () => {
        dispatch(logout());
    }
});

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
