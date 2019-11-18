import React, { Component } from "react";
import "./ForeCast.css";
import "weather-icons/css/weather-icons.css";

class ForeCast extends Component {
  render() {
    const { temperatureArray } = this.props;

    const data = temperatureArray.filter(
      item => item.dt_txt.slice(11, -6) === "15"
    );

    const weatherIcon = id => {
      switch (true) {
        case id >= 200 && id <= 232:
          return "wi wi-thunderstorm";
        case id === 800:
          return "wi wi-day-sunny";
        case id >= 300 && id <= 321:
          return "wi wi-sleet";
        case id >= 500 && id <= 531:
          return "wi wi-storm-showers";
        case id >= 600 && id <= 622:
          return "wi wi-snow";
        case id >= 701 && id <= 781:
          return "wi wi-fog";
        case id >= 801 && id <= 804:
          return "wi wi-day-fog";
        default:
          return "wi wi-day-fog";
      }
    };

    return (
      <div className="container1">
        {data.map(item => (
          <div className="container2">
            <i className={weatherIcon(item.weather[0].id)} />
            <h3>
              <span>
                {Math.floor(item.main.temp_min)}&deg;{" "}
                {Math.floor(item.main.temp_max)}&deg;
              </span>
            </h3>
          </div>
        ))}
      </div>
    );
  }
}

export default ForeCast;
