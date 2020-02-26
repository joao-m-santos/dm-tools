import { createStore, combineReducers } from "redux";
import { campaignReducer } from "./campaigns/reducers";

export const rootReducer = combineReducers({
    campaigns: campaignReducer
});

export type rootReducerType = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer);

export default store;
