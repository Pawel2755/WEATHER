
import Form from './Form';
import Result from './Result';
import './App.css';
import { Component } from 'react';
const APIKey = '872ba1fcbe9c210a6b5ee2bb87a058ae'

class App extends Component{

  state = {
    value: '',
    date: '',
    city: '',
    sunrise: '',
    sunset: '',
    temp: '',
    pressure: '',
    wind: '',
    error: false,
    zone: '',
  }

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  cityservice= (e) => {
    e.preventDefault()
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKey}&units=metric`;

    fetch(API)
    .then(answer => {
      if(answer.ok){
        return answer
      }
      throw Error("Nie udało się")
    }
      )
      .then(answer => answer.json() )
      .then(data => {
        const time = new Date().toLocaleString()
        this.setState({
          blad: false,
          date: time,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          wind: data.wind.speed,  
          zone: data.timezone,

        })
      })
    .catch(error => {
      console.log(error)
      this.setState({
        error: true,
        city: this.state.value
      })
    })

  }

  render() {
  return (
    <div className="App">
      <Form value={this.state.value} change={this.handleInputChange}
      submit={this.cityservice}
      />
      <Result pogoda={this.state}/>
    </div>
  );
  }
}

export default App;
