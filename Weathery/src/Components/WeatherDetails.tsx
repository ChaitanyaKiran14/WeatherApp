import React from 'react';

const WeatherDetails: React.FC = () => {
  return (
    <div className="bg-gray-900/50 p-6 rounded-lg shadow-lg backdrop-blur-md">
      <h2 className="text-3xl font-semibold mb-2">Storm with Heavy Rain</h2>
      <p className="text-gray-300">USA, Friday, Jan 3, 2023, 8:45 AM</p>
      <p className="mt-4 text-lg">
        Variable clouds with snow showers. High 17°C. Winds E at 10 to 20 mph.
        Chance of snow 50%. Snow accumulations less than one inch.
      </p>

      <div className="mt-6 flex justify-between items-center">
        <div>
          <p>Current Temp:</p>
          <p className="text-5xl font-bold">17°C</p>
        </div>
        <button className="px-4 py-2 bg-yellow-500 text-black rounded-md">
          See Details →
        </button>
      </div>
    </div>
    
  );
};

export default WeatherDetails;
