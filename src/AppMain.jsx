import React, { useState, useEffect } from "react";
import "./App.css";

function AppMain() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = "bcc63c23ad1841fd10934e030a0161e6";

  useEffect(() => {
    document.title = "Weather Now";
  }, []);

  const getWeather = async () => {
    if (!city) return;
    setLoading(true);
    try {
      const res = await fetch(
       ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const getLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchByCoords, geoError);
    } else {
      alert("Geolocation not supported by this browser.");
    }
  };

  const fetchByCoords = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLoading(true);
    try {
      const res = await fetch(
       ` https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
      );
      if (!res.ok) throw new Error("Unable to fetch weather");
      const data = await res.json();
      setWeather(data);
      setError("");
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const geoError = (err) => {
    alert("Unable to get location: " + err.message);
  };

  return (
    <div className="app-container">
      <div className="background-sun"></div>
      <div className="cloud cloud1"></div>
      <div className="cloud cloud2"></div>

      <div className="weather-card">
        <h1 className="title">WEATHER NOW</h1>
        <div className="search-row">
          <input
            className="search-input"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            autoFocus
            autoComplete="off"
          />
          <button className="search-btn" onClick={getWeather}>
            Search
          </button>
        </div>
        <button className="location-btn" onClick={getLocationWeather}>
          Use Current Location
        </button>

        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}

        {weather && (
          <>
            <div className="temp-row">
              <span className="temp-main">{Math.round(weather.main.temp)}°C</span>
              <span className="desc">{weather.weather[0].description}</span>
            </div>
            <div className="details-row">
              <span>Feels like: {Math.round(weather.main.feels_like)}°C</span>
              <span>Humidity: {weather.main.humidity}%</span>
              <span>Wind: {weather.wind.speed} m/s</span>
              <span>Pressure: {weather.main.pressure} hPa</span>
            </div>
            <div className="city-row">
              {weather.name}, {weather.sys.country}
            </div>
          </>
        )}
        <p className="tip">Try: Paris, Tokyo, New York</p>
      </div>
    </div>
  );
}

export default AppMain;