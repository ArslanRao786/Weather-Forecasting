import React, { useState } from "react";
import "./Form.css";

const Form = props => {
  const [value, setValue] = useState("city");

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div className="formFormatting">
      <select value={value} onChange={handleChange}>
        <option value="city">City Name</option>
        <option value="zipCode">Zip Code</option>
        <option value="Geographical Coordinates...">
          Geographical Coordinates
        </option>
      </select>

      <form onSubmit={props.getWeather}>
        <input type="text" name={value} placeholder={value} />
        <button>Get Weather</button>
      </form>
    </div>
  );
};

export default Form;
