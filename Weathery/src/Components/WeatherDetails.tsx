import React from 'react';

interface WeatherDetailsProps {
  description: string;
  currentTemp: number;
  windSpeed: number;
  dateTime: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  description,
  currentTemp,
  windSpeed,
  dateTime,
}) => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg backdrop-blur-md">
      <h2 className="text-3xl font-semibold mb-2">{description}</h2>
      <p className="text-gray-300">{dateTime}</p>
      <p className="mt-4 text-lg">Current Temp: {currentTemp}°C</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default WeatherDetails;
