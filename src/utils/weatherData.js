import { API_KEY, BASE_URL } from "./constants";

export const getWeatherData = async (type, query) => {
  const res = await fetch(
    `${BASE_URL}/${type}.json?key=${API_KEY}&q=${query}&aqi=yes`
  );
  const weatherData = res.json();
  return weatherData;
};

export const searchAutoComplete = async (query) => {
  const res = fetch(`${BASE_URL}/v1/search.json?key=${API_KEY}&q=${query}`);
  const searchResult = await res.json();
  return searchResult;
};
