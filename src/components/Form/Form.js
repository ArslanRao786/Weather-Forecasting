// libs
import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";

// src
import "./Form.css";

const Form = props => {
  const [value, setValue] = useState("city");

  const handleChange = event => {
    setValue(event.target.value);
  };

  const { getWeather } = props;

  return (
    <div className="formFormatting">
      <select value={value} onChange={handleChange}>
        <option value="city">City Name</option>
        <option value="zipCode">Zip Code</option>
        <option value="Geographical Coordinates">
          Geographical Coordinates
        </option>
      </select>

      <form onSubmit={getWeather}>
        {value === "city" && (
          <input type="text" name="city" placeholder="cityName.." required />
        )}
        {value === "zipCode" && (
          <input type="text" name="zipCode" placeholder="zipCode.." required />
        )}
        {value === "Geographical Coordinates" && (
          <Fragment>
            <input
              style={{ width: "250px" }}
              type="text"
              name="latitude"
              placeholder="latitude.."
              required
            />
            <input
              style={{ width: "250px" }}
              type="text"
              name="longitude"
              placeholder="longitude.."
              required
            />
          </Fragment>
        )}
        <button>Get Weather</button>
      </form>
    </div>
  );
};

Form.propTypes = {
  getWeather: PropTypes.func.isRequired
};

export default Form;
