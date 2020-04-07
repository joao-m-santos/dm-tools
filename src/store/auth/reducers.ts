import Cookies from "js-cookie";
import { AuthAction, AuthState } from "./types";
import { setAuthToken } from "../../utils";

const initialState: AuthState = {
    token: Cookies.get("auth_token"),
    user: null
};

export const authReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case "SET_TOKEN":
            console.log("::: Action: SET_TOKEN");
            action.payload && Cookies.set("auth_token", action.payload);
            setAuthToken(action.payload as string);
            return Object.assign({}, state, {
                token: action.payload
            });
        case "SET_USER":
            console.log("::: Action: SET_USER");
            return Object.assign({}, state, {
                user: action.payload
            });
        case "LOGOUT":
            console.log("::: Action: LOGOUT");
            Cookies.remove("auth_token");
            setAuthToken(null);
            return Object.assign(
                {},
                {
                    token: undefined,
                    user: null
                }
            );
        default:
            return state;
    }
};
