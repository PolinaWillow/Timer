import React from "react";
import {TimeBlock} from "./TimeBlock";

export const ReflectionTime =({ timeLimit})=>{
    const timeHour = Math.floor(timeLimit/60/60);
    const timeMinute = Math.floor((timeLimit-timeHour*60*60) / 60);
    const timeSecond = timeLimit - timeHour*60*60 - timeMinute*60;

    const ShowTime = ( time)=>{
        if (time<10){
            time = `0${time}`
        }
        return time
    }

    return(
        <div className="bRefLTime">
            <TimeBlock ShowTime={ShowTime(timeHour)} nameTime="Hours"/>
            <TimeBlock ShowTime={ShowTime(timeMinute)} nameTime="Minutes"/>
            <TimeBlock ShowTime={ShowTime(timeSecond)} nameTime="Seconds"/>
        </div>
    )

}