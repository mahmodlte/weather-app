const WeatherTooltip = ({ active, payload, label }) => {
  const date = new Date(label);

  if (active && payload && payload.length) {
    return (
      <div className=" w-full md:max-w-7xl px-5 dark:text-white bg-white border-gray-200  rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <p className="mx-2">{payload[0].value}°C</p>
        <p className="mx-2">{date.getHours() + ":00"}</p>
      </div>
    );
  }

  return null;
};
export default WeatherTooltip;
