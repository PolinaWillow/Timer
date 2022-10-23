import React from "react";
import "../../css/baseStyle.css"

export const TimeBlock = ({ShowTime, nameTime})=>{
    return(
        <div className="bTimeBlock">
            <div className="bSizeTime">{ShowTime}</div>
            <div className="bSizeTimeName">{nameTime}</div>
        </div>
    )
}