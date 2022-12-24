import { useState, useEffect } from "react";
import { searchAutoComplete } from "../utils/weatherData";
const SearchCity = ({ setSearch }) => {
  const [query, setQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);

  useEffect(() => {
    if (query.length > 0) {
      searchAutoComplete(query).then((suggestions) => {
        setSearchSuggestions(suggestions);
      });
    }
  }, [query]);
  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };
  const onSuggestionHandler = (query) => {
    setSearch(query);
    setQuery("");
    setSearchSuggestions([]);
  };

  return (
    <div className="flex flex-col">
      <input
        onChange={onQueryChange}
        required
        type="text"
        value={query}
        placeholder="Enter City Name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-44 md:w-96  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500"
      />

      {searchSuggestions &&
        searchSuggestions.map((suggestion) => {
          return (
            <div
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm hover:text-white hover:bg-gray-900 hover:cursor-pointer focus:ring-blue-500 focus:border-blue-500 block w-full md:w-96 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500"
              key={suggestion.id}
              onClick={() => onSuggestionHandler(suggestion.name)}
            >
              {suggestion.name}
            </div>
          );
        })}
    </div>
  );
};
export default SearchCity;
