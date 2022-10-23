import React from "react";
import "../css/baseStyle.css"

export const Button = ({nameButton, clickFunction}) =>{
    return(
        <button className="bButton" onClick={clickFunction} name = {nameButton}>{nameButton}</button>
    )
}