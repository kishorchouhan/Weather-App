import React from "react";

export default function Weather(props) {
  const { weatherData } = props;
  let date = new Date(weatherData.dt * 1000);
  return (
    <div>
      <div className="currentWeather">
        <p>Your current city: {weatherData.name}, {weatherData.sys.country}</p>
        <p>Current date and time: {date.toLocaleString()}</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        <p>Temperature: {weatherData.main.temp} °C</p>
        <p>Pressure: {weatherData.main.pressure} hPa</p>
        <p>Humidity: {weatherData.main.humidity} %</p>
        <p>Wind speed: {weatherData.wind.speed} meter/sec</p>
      </div>
      <div className="sevenDayHistory"></div>
    </div>
  );
}
/* 
Sample Api Response for current location:
  {"coord": { "lon": 139,"lat": 35},
    "weather": [
      {
        "id": 800,
        "main": "Clear",
        "description": "clear sky",
        "icon": "01n"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 289.92,
      "pressure": 1009,
      "humidity": 92,
      "temp_min": 288.71,
      "temp_max": 290.93
    },
    "wind": {
      "speed": 0.47,
      "deg": 107.538
    },
    "clouds": {
      "all": 2
    },
    "dt": 1560350192,
    "sys": {
      "type": 3,
      "id": 2019346,
      "message": 0.0065,
      "country": "JP",
      "sunrise": 1560281377,
      "sunset": 1560333478
    },
    "timezone": 32400,
    "id": 1851632,
    "name": "Shuzenji",
    "cod": 200
  }
*/