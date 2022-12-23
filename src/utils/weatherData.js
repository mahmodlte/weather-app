import { API_KEY, BASE_URL } from "./constants";

export const searchAutoComplete = async (query) => {
  const res = await fetch(`${BASE_URL}/search.json?key=${API_KEY}&q=${query}`);

  const searchResult = await res.json();
  return searchResult;
};

export const getWeatherForecast = async (query) => {
  const res = await fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=no`
  );
  const forecast = await res.json();
  return forecast;
};
