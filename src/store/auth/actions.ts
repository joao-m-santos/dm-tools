import { AuthAction, User } from "./types";

export const setToken = (token: string): AuthAction => {
    return {
        type: "SET_TOKEN",
        payload: token
    };
};

export const setUser = (user: User): AuthAction => {
    return {
        type: "SET_USER",
        payload: user
    };
};

export const logout = (): AuthAction => {
    return {
        type: "LOGOUT"
    };
};
