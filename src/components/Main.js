import React from 'react'
import Day from '../components/icons/day.svg'

// const api = {
//     key: "06ea30a8f0e848ca1a60ecf9c761bb2f",
//     base: "api.openweathermap.org/data/2.5/"
// }

function Main() {
    return(
        <div className="main">
            <div className="wrapper">
                <img src = {Day} alt="Day-logo" />
            </div>
            <div className="location">
                <h1>Hyderabad</h1>
                <span className="icon">
                    <i class="fas fa-location-arrow"></i>
                </span>                    
            </div>
            <div className="temp">
                <h2>31 °</h2>
            </div>
        </div>
    )
}


export default Main

