export const ReflectionTime = ({ timeLimit, themeReflection, timeClass}) =>{


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
        <div className={`ReflectionTimeClass ${themeReflection}`}>
            <div className = {timeClass}>
                <div className="SizeTime">{ShowTime(timeHour)}</div>
                <div className="TimeBlockText">Hours</div>
            </div>
            <div className = {timeClass}>
                <div className="SizeTime">{ShowTime(timeMinute)}</div>
                <div className="TimeBlockText">Minutes</div>
            </div>
            <div className = {timeClass}>
                <div className="SizeTime">{ShowTime(timeSecond)}</div>
                <div className="TimeBlockText">Seconds</div>
            </div>
        </div>
    )
}