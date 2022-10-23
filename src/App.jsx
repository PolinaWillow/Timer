import React from "react";
import "./css/baseStyle.css"
import settingsIcon from "./img/icon/free-icon-idea-bulb-4655799.png"
import {Timer} from "./conponents/Timer"

export const App = () => {

    const SettingClick = ()=>{}

    return(
        <div className="Container">
            <header>
                <span className="bTitle bText">Timer for study</span>
            </header>
            <div className="bMain">
                <Timer/>
            </div>
            <footer className="bFooter Container">
                <img className="bIconW" src={settingsIcon} name="settings" onClick={SettingClick}></img>
            </footer>
        </div>
    )
}