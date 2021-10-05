import React from 'react'

function Footer() {
    return(
        <div className="footer">
            <div className="container grid">
                <div className="type">Time <span className="data">12:08 AM</span></div>
                <div className="type">Humidity <span className="data">4</span></div>
                <div className="type">Visiblity <span className="data">58%</span></div>
                <div className="type">Dew Point <span className="data">22</span></div>
            </div>
            <div className="container grid">
                <div className="type">Wind Speed <span className="data">12:08 AM</span></div>
                <div className="type">Temp Min<span className="data">12:08 AM</span></div>
                <div className="type">Temp Max<span className="data">12:08 AM</span></div>
                <div className="type">Pressure <span className="data">12:08 AM</span></div>        
            </div>
            <div className="container grid-two">
                <div className="type">Sunrise <span className="data">12:08 AM</span></div>
                <div className="type">Sunset <span className="data">12:08 AM</span></div>
            </div>
        </div>
    )
}

export default Footer