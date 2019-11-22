// libs
import React from "react";
import PropTypes from "prop-types";

// src
import ForeCast from "./ForeCast/ForeCast";
import "./Weather.css";

const Weather = props => {
  const { averagedData, data: { name, country } = {} } = props;

  return (
    <div className="container">
      <div className="nameFormatting">
        {name && country && (
          <span>
            {name}, {country}
          </span>
        )}
      </div>
      <ForeCast data={averagedData} />
    </div>
  );
};

Weather.propTypes = {
  averagedData: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      temp: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      speed: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired
    })
  ).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired
  }).isRequired
};

export default Weather;
