// libs
import React, { useState } from "react";

// src
import "./App.css";
import Form from "./components/Form";
import Weather from "./components/Weather";
import averageCalculator from "./averageCalculator";
import getFormattedData from "./formattedData";

const API_KEY = "0cba01f1721b1f2b964a0f5cf6d0d255";

const App = () => {
  const [data, setdata] = useState({});
  const [loading, setloading] = useState(false);

  const getWeather = async e => {
    e.preventDefault();

    if (e.target.elements.city && e.target.elements.city.value) {
      setloading(true);
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${e.target.elements.city.value}&units=metric&appid=${API_KEY}`
      );
      setdata(await api_call.json());
      setloading(false);
    } else if (e.target.elements.zipCode && e.target.elements.zipCode.value) {
      setloading(true);
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?zip=${e.target.elements.zipCode.value}&units=metric&appid=${API_KEY}`
      );
      setdata(await api_call.json());
      setloading(false);
    } else if (
      e.target.elements.latitude.value &&
      e.target.elements.longitude.value
    ) {
      setloading(true);
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${e.target.elements.latitude.value}&lon=${e.target.elements.longitude.value}&units=metric&appid=${API_KEY}`
      );
      setdata(await api_call.json());
      setloading(false);
    }
  };

  const getData = data => {
    const { list, city: { name, country } = {} } = data;
    const formattedData = getFormattedData(list);
    return { formattedData, country, name };
  };

  return (
    <div>
      <div className="header">
        <h1>WEATHER FORECAST (5 DAYS)</h1>
      </div>

      <div>
        <Form getWeather={getWeather} />

        {loading === true && (
          <h1 style={{ textAlign: "center" }}>loading...</h1>
        )}
        {data.cod === "200" && (
          <Weather
            averagedData={averageCalculator(getData(data))}
            data={getData(data)}
          />
        )}

        {data.cod === "404" && (
          <h1 style={{ textAlign: "center" }}>Data not Found</h1>
        )}
      </div>
    </div>
  );
};

export default App;
