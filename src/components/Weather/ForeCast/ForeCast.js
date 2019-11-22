// libs
import React, { useState } from "react";
import "weather-icons/css/weather-icons.css";
import PropTypes from "prop-types";
import { weatherIcon, convertDataInFarenheit, description } from "./utils";

// src
import "./ForeCast.css";
import moment from "moment";

const ForeCast = props => {
  const [index, setIndex] = useState(0);
  const [centigrade, setCentigrade] = useState(true);
  const { data } = props;

  const details = data => {
    const { temp, humidity, pressure, speed, id, date } = data[index];
    return (
      <div>
        <p className="marginRemoving">{moment(date).format("dddd")}</p>
        <p className="marginRemoving" style={{ fontSize: "medium" }}>
          {description(id)}
        </p>

        <div className="container4">
          <div className="smallContainer">
            <div className="iconContainer">
              <i className={weatherIcon(id)} />
              {centigrade === true && (
                <h1 style={{ fontSize: 70 }}>{Math.floor(temp)}</h1>
              )}
              {centigrade === false && (
                <h1 style={{ fontSize: 70 }}>
                  {Math.floor(convertDataInFarenheit(temp))}
                </h1>
              )}

              <button className="asText" onClick={() => setCentigrade(true)}>
                &deg;C
              </button>
              <button className="asText" onClick={() => setCentigrade(false)}>
                &deg;F
              </button>
            </div>
            <div className="detailsFormatting">
              <p>Pressure: {Math.floor(pressure)} hPa</p>
              <p>Humidity: {Math.floor(humidity)}%</p>
              <p>WindSpeed: {Math.floor(speed)} m/s</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const selectedDate = index => {
    setIndex(index);
  };

  return (
    <div>
      {details(data)}
      <div className="container1">
        {data.map((item, index) => (
          <div
            className="container2"
            onClick={() => selectedDate(index)}
            style={{ cursor: "pointer" }}
          >
            <p>{moment(item.date).format("dddd")}</p>
            <i className={weatherIcon(item.id)} />
            <h3>
              {centigrade === false && (
                <span>
                  {Math.floor(convertDataInFarenheit(item.temp_min))}&deg;{" "}
                  {Math.floor(convertDataInFarenheit(item.temp_max))}
                  &deg;
                </span>
              )}
              {centigrade === true && (
                <span>
                  {Math.floor(item.temp_min)}&deg; {Math.floor(item.temp_max)}
                  &deg;
                </span>
              )}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

ForeCast.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired
    })
  ).isRequired
};

export default ForeCast;
