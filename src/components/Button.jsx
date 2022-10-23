export const Button = ({nameButton, clickFunction, themeClass}) =>{
    return(
        <button className={`ButtonClass ${themeClass}`} onClick={clickFunction} name = {nameButton}>{nameButton}</button>
    )
}