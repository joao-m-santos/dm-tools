import React from "react";
import "./App.scss";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/SideNav";
import Main from "./components/main/Main";
import Notes from "./components/notes/Notes";

const App = () => {
    return (
        <>
            <Header />

            <div className="app">
                <SideNav />
                <Main />
                <Notes />
            </div>
        </>
    );
};

export default App;
