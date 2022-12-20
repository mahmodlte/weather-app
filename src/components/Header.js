import SearchCity from "./SearchCity";
import WeatherLogo from "../assets/Applogo.svg";
const Header = ({ setSearch }) => {
  return (
    <div className=" flex items-center bg-gray-900 ">
      <div className=" flex justify-center items-center my-2 mx-5">
        <h1 className=" text-xl sm:text-2xl text-white ">Weatherly</h1>
        <img
          className="text-white"
          width={50}
          height={50}
          src={WeatherLogo}
          alt="Weather app logo"
        />
      </div>
      <div className=" mx-16">
        <SearchCity setSearch={setSearch} />
      </div>
    </div>
  );
};
export default Header;
