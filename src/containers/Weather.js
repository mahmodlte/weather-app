import { useEffect, useState } from "react";
import WeatherCard from "../components/WeatherCard";
import { getWeatherData } from "../utils/weatherData";

const Weather = () => {
  const [currentWeather, setCurentWeather] = useState();

  useEffect(() => {
    getWeatherData("current").then((weather) => {
      setCurentWeather(weather);
    });
  }, []);

  return (
    <div className="h-screen bg-gray-900">
      <div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">Today Forecast</h1>
          <WeatherCard weather={currentWeather} />
        </div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">14 Days Forecast</h1>
          {/* <WeatherCard /> */}
        </div>
      </div>
    </div>
  );
};
export default Weather;
