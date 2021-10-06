import React from 'react'
import imgsrc from './icons/day.svg'



function Main(props) {
    
    

    return(
        <div className="main">
            <div className="wrapper">
                <img 
                src = {imgsrc} 
                
                alt="Day-logo" />
            </div>
            <div className="location">
                <h1>{props.data.City}</h1>
                <span className="icon">
                    <i class="fas fa-location-arrow"></i>
                </span>                    
            </div>
            <div className="temp">
                <h2>{props.data.Temp} °</h2>
            </div>
            <div className="description">
                <h3>{props.data.Main}</h3>
                <p>{props.data.Description}</p>
            </div>
        </div>
    )
}
//How to change svgs based on fetched 'Main' weather data

export default Main

