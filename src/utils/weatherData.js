import { API_KEY, BASE_URL } from "./constants";

export const getWeatherData = async (type) => {
  const res = await fetch(
    `${BASE_URL}/${type}.json?key=${API_KEY}&q=Erbil,IQ&aqi=yes`
  );
  const weatherData = res.json();
  return weatherData;
};
