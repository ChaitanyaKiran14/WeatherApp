import React, { useState, useEffect } from "react";
import { Thermometer, Search, CloudRain } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';
import ForecastCard from "./ForecastCard";
import WeatherDetails from "./WeatherDetails";

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const configValue: string | undefined = import.meta.env.VITE_SOME_CONFIGURATION;
console.log(configValue);

interface ImportMetaEnv {
  VITE_SOME_CONFIGURATION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
 }


const TestSidebar: React.FC = () => {
  const [city, setCity] = useState("London");
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${configValue}`
        );

        console.log(response.data)
        setWeatherData(response.data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather data.");
        console.error(err);
      }
    };
    fetchData();
  }, [city]);

  const chartData = {
    labels: ['1 AM', '5 AM', '9 AM', '1 PM', '5 PM', '9 PM'],
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [21, 7, -8, 15, 23, 17],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderWidth: 2,
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/4 min-h-screen p-6 bg-white/10 backdrop-blur-md rounded-r-3xl shadow-lg border-r border-r-white">
      <div className="flex items-center justify-center flex-row pb-1 border-b border-white/70 w-48">
        <Thermometer className="text-white mr-2" />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter City"
          className="bg-transparent text-white w-24 focus:outline-none placeholder-gray-400"
          aria-label="Location"
          type="text"
        />
        <Search className="text-white ml-2" />
      </div>

      {weatherData ? (
        <>
          <ForecastCard
            city={weatherData.city.name}
            high={weatherData.list[0].main.temp_max}
            low={weatherData.list[0].main.temp_min}
          />

          <div className="mb-10">
            <Line data={chartData} />
          </div>

          <WeatherDetails
            description={weatherData.list[0].weather[0].description}
            currentTemp={weatherData.list[0].main.temp}
            windSpeed={weatherData.list[0].wind.speed}
            dateTime={weatherData.list[0].dt_txt}
          />
        </>
      ) : (
        <p className="text-white mt-5">{error || "Loading weather data..."}</p>
      )}
    </div>
  );
};

export default TestSidebar;
