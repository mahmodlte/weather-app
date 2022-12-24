import { useEffect, useState } from "react";
import DailyForecastCard from "../components/forecastCards/DailyForecastCard";
import WeatherCard from "../components/forecastCards/WeatherCard";
import { getWeatherForecast } from "../utils/weatherData";

const Weather = ({ searchQuery }) => {
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    getWeatherForecast(searchQuery).then((forecast) => {
      setWeatherForecast(forecast);
    });
  }, [searchQuery]);
  console.log(weatherForecast);
  return (
    <div className="h-auto bg-gray-900">
      <div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">Today Forecast</h1>
          <WeatherCard weather={weatherForecast} />
        </div>
        <div>
          <h1 className="text-white text-2xl px-10 py-10">2 Days Forecast</h1>
          {weatherForecast &&
            weatherForecast.forecast.forecastday.map((day) => {
              return <DailyForecastCard weather={day} />;
            })}
        </div>
      </div>
    </div>
  );
};
export default Weather;
