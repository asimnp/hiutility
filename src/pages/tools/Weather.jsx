import { useEffect, useState } from "react";
import axios from "axios";

import ToolHeader from "../../components/ToolHeader";
import envVars from "../../config/env";
import CurrentWeatherCard from "../../components/weather/CurrentWeatherCard";
import WeatherForm from "../../components/weather/WeatherForm";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("kathmandu");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${envVars.WEATHER_API_KEY}`
      );
      setData(response.data);
      setErrorMessage("");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mx-5 sm:container sm:mx-auto">
      <ToolHeader
        name="Weather"
        description="A smart weather application that delivers real-time forecasts, severe weather alerts, and climate insights. "
      />

      <WeatherForm city={city} setCity={setCity} onSearch={handleSearch} />

      {errorMessage && (
        <div className="my-5 w-6xl rounded-md bg-red-100 p-3 text-red-600">
          {errorMessage}
        </div>
      )}

      {data ? (
        <CurrentWeatherCard data={data} />
      ) : (
        <div className="my-10 text-gray-400">Loading current weather...</div>
      )}
    </div>
  );
}
