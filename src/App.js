import React from "react";
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "0cba01f1721b1f2b964a0f5cf6d0d255";

class App extends React.Component {
  state = {
    data: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    // const zipCode = e.target.elements.zipCode.value;
    // const latitude = e.target.elements.latitude.value;
    // const longitude = e.target.elements.longitude.value;

    if (city) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
      );
      this.setState({
        data: await api_call.json()
      });
    }
  };
  //this.getData(data);
  //console.log(data);
  //   } else if (zipCode) {
  //     const api_call = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?id=${zipCode}&units=metric&appid=${API_KEY}`
  //     );
  //     const data = await api_call.json();
  //     console.log(data);
  //   } else if (latitude && longitude) {
  //     const api_call = await fetch(
  //       `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`
  //     );
  //     const data = await api_call.json();
  //     console.log(data);
  //   }
  // };

  render() {
    return (
      <div>
        <div className="header">
          <h1>WEATHER FORECAST (5 DAYS)</h1>
        </div>
        <div>
          <Form getWeather={this.getWeather} />
          <Weather data={this.state.data} />
        </div>
      </div>
    );
  }
}

export default App;
