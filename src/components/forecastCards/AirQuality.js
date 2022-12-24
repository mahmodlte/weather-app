const AirQuality = ({ airQuality }) => {
  return (
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
  );
};
export default AirQuality;
