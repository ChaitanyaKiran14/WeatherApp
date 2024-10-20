import React from 'react';

interface ForecastCardProps {
  city: string;
  high: number;
  low: number;
}

const ForecastCard: React.FC<ForecastCardProps> = ({ city, high, low }) => {
  return (
    <div className="p-4 bg-white/10 backdrop-blur-md rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{city}</h3>
      <div className="flex justify-between mt-4">
        <p className="text-lg">High: {high}°C</p>
        <p className="text-lg">Low: {low}°C</p>
      </div>
    </div>
  );
};

export default ForecastCard;
