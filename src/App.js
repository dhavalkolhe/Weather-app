import React from 'react'
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';


const api = {
    key: "06ea30a8f0e848ca1a60ecf9c761bb2f",
    base: "api.openweathermap.org/data/2.5/"
}

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            City: "New York",
            Country: "",
            State: "",
            Temp: "",
            Humidity: "",
            Visiblity: "",
            Deg: "",
            WindSpeed: "",
            TempMin: "",
            TempMax: "",
            Pressure: "",
            Sunrise: "",
            Sunset: "",
            Main: "",
            Description: "",
            
        }
        
        this.searchEvent = this.searchEvent.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.TimeStamptotime = this.TimeStamptotime.bind(this)
        
    }


    handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          this.searchEvent()
        }
    }

   

    handleChange(event){
        const {name, value} = event.target
        this.setState(
            {[name]:value}
        )
    }
    TimeStamptotime(ts){
      let unix_timestamp = ts
      var date = new Date(unix_timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var seconds = "0" + date.getSeconds();
      return (hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2));
    }

    searchEvent() { 
        fetch(`http://${api.base}weather?q=${this.state.City}&units=metric&appid=${api.key}`)
            .then(res => res.json())
            .then(data => {


             
              // console.log(formattedTime)
              

                this.setState({
                    Humidity: data.main.humidity,
                    Visiblity: data.visibility,
                    WindSpeed: data.wind.speed,
                    TempMin: data.main.temp_min,
                    TempMax: data.main.temp_max,
                    Pressure: data.main.pressure,
                    Sunrise: this.TimeStamptotime(data.sys.sunrise),//time stamp to human date aur fr human date se time extract krne ke liye tostring
                    Sunset:  this.TimeStamptotime(data.sys.sunset),
                    Temp: data.main.temp,
                    Deg: data.wind.deg,
                    Main: data.weather[0].main,
                    Description: data.weather[0].description,
                    
                })
            })
             
    }

    componentDidMount() {
      {this.searchEvent()}
    }

    render() {
      return(
        <div className="App">
          <Header 
          handleChange = {this.handleChange}
          handleKeyDown = {this.handleKeyDown}
          searchEvent = {this.searchEvent}
          data = {this.state}
          />
          <Main 
          handleChange = {this.handleChange}
          handleKeyDown = {this.handleKeyDown}
          searchEvent = {this.searchEvent}
          data = {this.state}
          />
          <Footer 
          handleChange = {this.handleChange}
          handleKeyDown = {this.handleKeyDown}
          searchEvent = {this.searchEvent}
          
          data = {this.state}
          />
      </div>
      )
        
    }
}

export default App



