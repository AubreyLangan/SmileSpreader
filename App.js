import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from "./components/CustomNavbar"
import Header from "./components/Header";
import RandomActofKindness from "./components/Generator";
import Tracker from "./components/Tracker";
import Chat from "./components/Chat";

function App() {
    return (
        <div className="App">
            <Header />
            <CustomNavbar />
            <div className="content">
                <h1>Welcome to Smile Spreaders</h1>
                <RandomActofKindness />
                <Tracker />
                <Chat />
            </div>
        </div>
    );
}
export default App;