import { createStore, combineReducers } from "redux";
import { campaignReducer } from "./campaigns/reducers";
import { authReducer } from "./auth/reducers";

export const rootReducer = combineReducers({
    auth: authReducer,
    campaigns: campaignReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
