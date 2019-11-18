import React, { Component } from "react";
import ForeCast from "./ForeCast/ForeCast";
import "./Weather.css";

class Weather extends Component {
  state = {
    temperatureArray: [],
    city: undefined,
    country: undefined
  };

  getData = () => {
    const { data } = this.props;
    this.setState({
      city: data.city.name,
      country: data.city.country,
      temperatureArray: data.list
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.data !== this.props.data) {
      this.getData();
    }
  }

  render() {
    const { city, country, temperatureArray } = this.state;
    return (
      <div className="container">
        <div className="nameformatting">
          {city && country && (
            <p>
              <span>
                {city}, {country}
              </span>
            </p>
          )}
        </div>
        <ForeCast temperatureArray={temperatureArray} />
      </div>
    );
  }
}

export default Weather;
