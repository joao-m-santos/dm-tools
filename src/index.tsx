import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppContainer from "./AppContainer";
import store from "./store/index";
import "./variables.css";
import "./index.scss";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
