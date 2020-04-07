import { connect } from "react-redux";

import App from "./App";
import { rootReducerType } from "./store/index";

const mapStateToProps = (state: rootReducerType) => ({
    token: state.auth.token
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;
