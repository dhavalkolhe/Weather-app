import React from 'react'


function Footer(props) {

    return(
        <div className="footer">
            <div className="container grid">
                <div className="type">Temp <span className="data">{props.data.Temp} °C</span></div>
                <div className="type">Humidity <span className="data">{props.data.Humidity}</span></div>
                <div className="type">Visiblity <span className="data">{props.data.Visiblity}</span></div>
                <div className="type">Deg <span className="data">{props.data.Deg}</span></div>
            </div>
            <div className="container grid">
                <div className="type">Wind Speed <span className="data">{props.data.WindSpeed}mph</span></div>
                <div className="type">Temp Min<span className="data">{props.data.TempMin} °C</span></div>
                <div className="type">Temp Max<span className="data">{props.data.TempMax} °C</span></div>
                <div className="type">Pressure <span className="data">{props.data.Pressure} hpa</span></div>        
            </div>
            <div className="container grid-two">
                <div className="type">Sunrise <span className="data">{props.data.Sunrise} IST</span></div>
                <div className="type">Sunset <span className="data">{props.data.Sunset} IST</span></div>
            </div>
        </div>
    )
}

export default Footer