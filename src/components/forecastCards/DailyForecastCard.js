import AirQuality from "./AirQuality";

const DailyForecastCard = ({ weather }) => {
  console.log(weather);
  const avgTemp = (weather && weather.day.avgtemp_c) || "";

  const condition = (weather && weather.day.condition) || "";
  const date = (weather && weather.date) || "";
  const precipitation = (weather && weather.day.totalprecip_mm) || 0;
  const chanceOfRain = (weather && weather.day.daily_chance_of_rain) || 0;
  const maxTemp = (weather && weather.day.maxtemp_c) || "";
  const minTemp = (weather && weather.day.mintemp_c) || "";

  const avgHumidity = (weather && weather.day.avghumidity) || "";
  const maxWindSpeed = (weather && weather.day.maxwind_kph) || "";

  return (
    <div className="max-w-sm md:max-w-7xl mx-10 mt-5 flex flex-col sm:justify-between sm:flex-row bg-white border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col  dark:text-white ">
        <section className="flex justify-between md:justify-start md:items-center mx-2 my-2 ">
          <div className="flex md:mx-5 flex-col">
            <p className="dark:text-white text-3xl "> {avgTemp}°C</p>
            <p>{date}</p>
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
        <section className="flex justify-between mx-3">
          <div className=" text-sm divide-y ">
            <p className="my-0.5"> Min tempture: {minTemp} °C</p>
            <p className="my-0.5"> Max tempture: {maxTemp} °C</p>
            <p className="my-0.5"> Chances of rain: {chanceOfRain}%</p>
            <p className="my-0.5">Totel precipitation: {precipitation} mm</p>
            <p className="my-0.5">Average humidity: {avgHumidity} %</p>
            <p className="my-0.5"> Max wind speed: {maxWindSpeed} KPH</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DailyForecastCard;
