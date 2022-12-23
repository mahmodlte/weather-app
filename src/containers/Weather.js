import { useEffect, useState } from "react";
import WeatherCard from "../components/weatherCard/WeatherCard";
import { getWeatherForecast } from "../utils/weatherData";

const Weather = ({ searchQuery }) => {
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    getWeatherForecast(searchQuery).then((forecast) => {
      console.log(forecast);
      setWeatherForecast(forecast);
    });
  }, [searchQuery]);

  return (
    <div className="h-auto sm:h-screen bg-gray-900">
      <div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">Today Forecast</h1>
          <WeatherCard weather={weatherForecast} />
        </div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">2 Days Forecast</h1>
        </div>
      </div>
    </div>
  );
};
export default Weather;
