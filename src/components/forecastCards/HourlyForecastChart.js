import { useState, useEffect } from "react";
import WeatherTooltip from "./WeatherTooltip";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const HourlyForecastChart = ({ weatherForecast }) => {
  const [hourlyForecast, setHourlyForecast] = useState([]);
  useEffect(() => {
    if (weatherForecast) {
      weatherForecast.map((day) => {
        const hourly = day.hour.map((hourlyWeather) => {
          return {
            time: hourlyWeather.time,
            temp: hourlyWeather.temp_c,
          };
        });

        setHourlyForecast(hourly);
        return hourly;
      });
    }
  }, [weatherForecast]);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart data={hourlyForecast}>
        <XAxis dataKey="time" />
        <YAxis dataKey="temp" />
        <Tooltip content={WeatherTooltip} />

        <Area type="monotone" dataKey="temp" stroke="#ffa200" fill="#ffd000" />
      </AreaChart>
    </ResponsiveContainer>
  );
};
export default HourlyForecastChart;
