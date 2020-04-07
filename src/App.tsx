import React from "react";
import "./App.scss";
import HeaderContainer from "./components/header/HeaderContainer";
import SideNav from "./components/sidenav/SideNav";
import MainContainer from "./components/main/MainContainer";
import NotesContainer from "./components/notes/Notes";
import { setAuthToken } from "./utils";
import API from "./api/api";
import store from "./store";
import { User } from "./store/auth/types";
import { setUser } from "./store/auth/actions";

interface AppProps {
    token: string | undefined;
}

const App = (props: AppProps) => {
    if (props.token) {
        setAuthToken(props.token);
        API.users.get().then((user: User) => store.dispatch(setUser(user)));
    }
    return (
        <>
            <HeaderContainer />

            <div className="app">
                <SideNav />
                <MainContainer />
                <NotesContainer />
            </div>
        </>
    );
};

export default App;
