import React, { useEffect, useState } from "react";
import "./Weather.css";

const KEY = "825a9283de9c9096a063c99a4ab2b6ca";

export const Weather = () => {
  const [location, setlocation] = useState("");
  const [weather, setWeather] = useState({
    name: null,
    temp_min: null,
    temp_max: null,
  });
  const [error, setError] = useState("");

  const examination = () => {
    setlocation("");
    if (!location) setError("City not founded");
    subReq(location);
  };

  const subReq = async (location) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${KEY}&units=metric`
    );
    const data = await response.json();

    setWeather({
      name: data?.name,
      temp_min: data?.main?.temp_min,
      temp_max: data?.main?.temp_max,
    });
  };
  console.log(weather);
  return (
    <div className="main-block">
      <h2 className="title">Weather App</h2>
      <input
        className="input"
        value={location}
        onChange={(e) => setlocation(e.target.value)}
      ></input>
      <button onClick={examination}>Find</button>
      <div>
        <p>{error}</p>
        <p>{weather?.name}</p>
        <p>{weather?.temp_max}</p>
        <p>{weather?.temp_min}</p>
      </div>
    </div>
  );
};
