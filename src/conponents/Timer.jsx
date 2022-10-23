import React, {useState, useEffect} from "react";
import {ReflectionTime} from "./ReflectionTime/ReflectionTime";
import {Button} from "./Button";
import "../css/baseStyle.css"

export const Timer = () =>{
    const startName = "Начать"
    const stopName = "Пауза"
    const finishName = "Отмена"
    const resumeName = "Продолжить"

    const [isCounting, setIsCounting] = useState(false) //Состояние отсчета (Остановлено или нет)
    const [isStart, setStart] = useState(true) //Начало отсчета
    const [timeLimit, setTimeLimit] = useState({hours:0, minutes: 0, seconds:0}) //Оставшееся время
    const [time, setTime] = useState(0) //Отображение времени

    useEffect(()=>{ //Изменение времени
        const interval = setInterval(()=>{
            if (isCounting) {
                setTime((time) => time >= 1 ? time -= 1 : 0)
            }
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[isCounting])

    const changeHandler = event => {
        setTimeLimit({ ...timeLimit, [event.target.name]: event.target.value })
    }

    const HandelStart = ()=>{
        if((timeLimit.hours<0)||(timeLimit.minutes<0)||(timeLimit.seconds<0)){
            return alert("Время не может быть меньше 0")
        }
        let timeClock = Number(timeLimit.hours*60*60)+Number(timeLimit.minutes*60)+Number(timeLimit.seconds)
        setTime(timeClock)
        setStart(false)
        setIsCounting(true)

    }
    const HandelStop = ()=>{
        setIsCounting(false)
    }
    const HandelResume = ()=>{
        setIsCounting(true)
    }
    const HandelFinish = ()=>{
        setStart(true)
        setIsCounting(false)
        setTimeLimit( {hours:0, minutes: 0, seconds:0})
        setTime(0)
    }

    return(
        <div className="bText">
            <div>

                {isStart?(
                    <div >
                        <div className="bInput">
                            <div className="bInpBlock">
                                <input className="bSizeTime bInpW"  type="text" name="hours" placeholder="00"
                                       onChange={changeHandler}></input>
                                <div className="bSizeTimeName">Hours</div>
                            </div>
                            <div className="bInpBlock">
                                <input className="bSizeTime bInpW" type="text" name="minutes" placeholder="00"
                                       onChange={changeHandler}></input>
                                <div className="bSizeTimeName">Minutes</div>
                            </div>
                            <div className="bInpBlock">
                                <input className="bSizeTime bInpW" type="text" name="seconds" placeholder="00"
                                       onChange={changeHandler}></input>
                                <div className="bSizeTimeName">Seconds</div>
                            </div>
                        </div>
                        <div className="bButStart">
                            <Button nameButton={startName} clickFunction={HandelStart} />
                        </div>

                    </div>

                ):(

                    <div >
                        <ReflectionTime timeLimit={time}/>
                        <div className="bButWork">
                            {isCounting?(
                            <Button nameButton={stopName} clickFunction={HandelStop}/>
                            ):(
                            <Button nameButton={resumeName} clickFunction={HandelResume}/>
                            )}
                            <Button nameButton={finishName} clickFunction={HandelFinish}/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}