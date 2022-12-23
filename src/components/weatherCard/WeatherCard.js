import HourlyForecastChart from "./HourlyForecastChart";

const WeatherCard = ({ weather }) => {
  const currentTemp = (weather && weather.current.temp_c) || "";
  const feelsLike = (weather && weather.current.feelslike_c) || "";
  const condition = (weather && weather.current.condition) || "";
  const lastUpdated = (weather && weather.current.last_updated) || "";
  const precipitation = (weather && weather.current.precip_mm) || 0;
  const humidity = (weather && weather.current.humidity) || "";
  const windDir = (weather && weather.current.wind_dir) || "";
  const windSpeed = (weather && weather.current.wind_kph) || "";
  const pressure = (weather && weather.current.pressure_mb) || "";
  const cloud = (weather && weather.current.cloud) || "";
  const uv = (weather && weather.current.uv) || "";
  const airQuality =
    (weather && weather.current.air_quality["us-epa-index"]) || "";

  return (
    <div className="max-w-sm md:max-w-7xl mx-10 flex flex-col sm:justify-between sm:flex-row bg-white border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col  dark:text-white ">
        <section className="flex justify-between md:justify-start md:items-center mx-2 my-2 ">
          <div className="flex md:mx-5 flex-col">
            <p className="dark:text-white text-3xl "> {currentTemp}°C</p>
            <p>It feels like: {feelsLike}</p>

            <p
              className={
                airQuality === 1
                  ? "shadow-lg shadow-green-500 rounded-md"
                  : airQuality === 2
                  ? "shadow-lg shadow-amber-300 rounded-md"
                  : airQuality === 3
                  ? "shadow-lg shadow-orange-500 rounded-md"
                  : airQuality === 4
                  ? "shadow-lg shadow-orange-600 rounded-md"
                  : airQuality === 5
                  ? "shadow-lg shadow-orange-700 rounded-md"
                  : airQuality === 6
                  ? "shadow-lg shadow-red-600 rounded-md"
                  : ""
              }
            >
              Air Quality:{" "}
              {airQuality === 1
                ? "Good"
                : airQuality === 2
                ? "Moderate"
                : airQuality === 3
                ? "Unhealthy for sensitive group"
                : airQuality === 4
                ? "Unhealthy"
                : airQuality === 5
                ? "Very Unhealthy"
                : airQuality === 6
                ? "Hazardous"
                : "No Data"}
            </p>
          </div>

          <div className="flex flex-col items-center justify-center  ">
            <img
              className="w-20 h-20 "
              src={condition.icon}
              alt=" weather condition icon"
            />
            <div className=" overflow-hidden">{condition.text}</div>
          </div>
        </section>
        <span className=" h-0.5 w-72 mx-auto my-2 md:hidden bg-white lg:w1/3"></span>
        <section className="flex justify-between mx-6">
          <div className=" text-lg ">
            <p className="my-0.5">Last Updated : {lastUpdated}</p>
            <p className="my-0.5">Precipitation: {precipitation} mm</p>
            <p className="my-0.5">Humidity: {humidity} %</p>
            <p className="my-0.5">Wind: {windSpeed} KPH</p>
            <p className="my-0.5">Wind direction: {windDir}</p>
            <p className="my-0.5">Pressure: {pressure} MB</p>
            <p className="my-0.5">Cloud Cover: {cloud} % </p>
            <p className="my-0.5">UV index: {uv}</p>
          </div>
        </section>
      </div>
      <div className="w-auto h-96 md:w-2/4 lg:w-4/5 sm:h-96">
        <HourlyForecastChart
          weatherForecast={weather && weather.forecast.forecastday}
        />
      </div>
    </div>
  );
};
export default WeatherCard;
