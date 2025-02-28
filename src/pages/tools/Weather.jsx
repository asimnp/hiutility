import { useEffect } from "react";
import axios from "axios";

import ToolHeader from "../../components/ToolHeader";
import envVars from "../../config/env";
import { useState } from "react";
import CurrentWeatherCard from "../../components/weather/CurrentWeatherCard";

export default function Weather() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("kathmandu");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${envVars.WEATHER_API_KEY}`
      );
      setData(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <ToolHeader
        name="Weather"
        description="A smart weather application that delivers real-time forecasts, severe weather alerts, and climate insights. "
      />

      {data ? (
        <CurrentWeatherCard data={data} />
      ) : (
        <div className="text-gray-400 my-10">Loading current weather...</div>
      )}
    </div>
  );
}
