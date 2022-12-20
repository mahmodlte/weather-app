import { useState } from "react";

const SearchCity = ({ setSearch }) => {
  const [query, setQuery] = useState("");

  const onQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex">
        <input
          onChange={onQueryChange}
          required
          type="text"
          id="city_search"
          placeholder="Enter City Name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500"
        />
        <button className="bg-gray-50 mx-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full md:w-16 dark:bg-gray-700 dark:border-gray-600 dark:placeholderbg-gray-400 dark:text-white dark:focus:ring-blue-500  dark:focus:border-blue-500">
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchCity;
