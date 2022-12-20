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
    <div className="max-w-sm mx-auto bg-white border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col md:flex-row justify-evenly dark:text-white ">
        <section className="flex justify-between mx-2 my-2 ">
          <div className="flex flex-col">
            <p className="dark:text-white text-3xl"> {currentTemp}°C</p>
            <p>It feels like: {feelsLike}</p>

            <p>
              Air Quality:{" "}
              {airQuality === 1
                ? "Good"
                : airQuality === 2
                ? "airQuality"
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

          <div className="flex flex-col items-center justify-center ">
            <img
              className="w-20 h-20"
              src={condition.icon}
              alt=" weather condition icon"
            />
            <div className="w-24 overflow-hidden">{condition.text}</div>
          </div>
        </section>
        <span className=" h-0.5 w-80 mx-auto my-2 bg-white lg:w1/3"></span>
        <section className="flex justify-between">
          <div className="mx-2 text-lg ">
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
    </div>
  );
};
export default WeatherCard;
