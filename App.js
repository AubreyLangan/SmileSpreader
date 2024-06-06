import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CustomNavbar from "./components/CustomNavbar"
import Header from "./components/Header";
import RandomActofKindness from "./components/Generator";
import Tracker from "./components/Tracker";

function App() {
    return (
        <div className="App">
            <Header />
            <CustomNavbar />
            <h1>Welcome to Smile Spreaders</h1>
            <RandomActofKindness />
            <Tracker />
        </div>
    );
}
export default App;