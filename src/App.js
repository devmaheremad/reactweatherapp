import React, { Component, Fragment } from 'react'
import WeatherForm from './Components/WeatherFrom'
import WeatherResault from './Components/WeatherResualt'
import './AppStyled.js';

class App extends Component {

  state = {
    temperature: '',
    city: '',
    country: '',
    humidity: '',
    description: '',
    erorr: ''
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const KEY = '6d3e214283afdd4c3332b2fad92fddea'
    const LINK = `http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${KEY}`
    const api = await fetch(LINK)
    const data = await api.json()
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        erorr: ''
      })
    } else {this.setState({
      temperature: '',
      city: '',
      country: '',
      humidity: '',
      description: '',
      erorr: 'Please Enter Valid Data'
    })}
  }

  render() {
    return (
      <Fragment>
        <WeatherForm getWeather={this.getWeather} />
        <WeatherResault 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          erorr={this.state.erorr}
        />
      </Fragment>
    )
  }

}

export default App;