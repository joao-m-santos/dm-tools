import React from "react";
import "./App.scss";
import HeaderContainer from "./components/header/HeaderContainer";
import SideNav from "./components/sidenav/SideNav";
import MainContainer from "./components/main/MainContainer";
import Notes from "./components/notes/Notes";

const App = () => {
    return (
        <>
            <HeaderContainer />

            <div className="app">
                <SideNav />
                <MainContainer />
                <Notes />
            </div>
        </>
    );
};

export default App;
