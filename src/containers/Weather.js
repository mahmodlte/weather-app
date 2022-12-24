import { useEffect, useState } from "react";
import DailyForecastCard from "../components/forecastCards/DailyForecastCard";
import WeatherCard from "../components/forecastCards/WeatherCard";
import { getWeatherForecast } from "../utils/weatherData";

const Weather = ({ searchQuery }) => {
  const [weatherForecast, setWeatherForecast] = useState();

  useEffect(() => {
    if (searchQuery) {
      getWeatherForecast(searchQuery).then((forecast) => {
        setWeatherForecast(forecast);
      });
    }
  }, [searchQuery]);
  return (
    <div className=" dark:text-white text-gray-900 h-full md:h-screen dark:bg-gray-900">
      <div>
        <div>
          <h1 className=" text-2xl px-10 py-10">Today Forecast</h1>
          {weatherForecast ? (
            <WeatherCard weather={weatherForecast} />
          ) : (
            <h2 className="text-2xl m-16 dark:text-white">
              There is no selected city or country please use the search bar to
              search your city
            </h2>
          )}
        </div>
        <h1 className=" text-2xl px-10 py-10">3 Days Forecast</h1>

        <div className="sm:flex sm:mb-10">
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
