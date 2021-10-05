import React from 'react'


class Header extends React.Component {

    constructor() {
        super()
        this.state = {
            City: "",
            Country: "",
            Time: "",
            Humidity: "",
            Visiblity: "",
            DewPoint: "",
            WindSpeed: "",
            TempMin: "",
            TempMax: "",
            Pressure: "",
            Sunrise: "",
            Sunset: "",
        }
        
        this.searchEvent = this.searchEvent.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        
    }

    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.searchEvent()
        }
    }

    searchEvent() {
        console.log("Searched")
    }

    render() {
        return(
        <div className="searchBox">
            <input 
                className="searchInput"
                type="text" 
                name="" 
                placeholder="Location"
                onKeyDown={this.handleKeyDown}
             />
            <button onClick = {this.searchEvent} class="searchButton" href="#">
                {/* This is getting triggered on forst click on mobile */}
                <i className="material-icons">
                    search
                </i>
            </button>
        </div>
        )
    }
}

export default Header