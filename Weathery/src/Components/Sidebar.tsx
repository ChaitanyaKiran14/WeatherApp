// src/components/Sidebar.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

const Sidebar: React.FC = () => {
  // Chart data
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
    <div className="w-1/4 min-h-screen p-6 bg-white/10 backdrop-blur-md rounded-r-xl shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Oklahoma City</h2>
      

      {/* Air Quality Section */}
      <div className="mb-10">
        <p className="text-gray-300 text-sm mb-1">Air Quality</p>
        <div className="flex items-center justify-between mb-4">
          <p className="text-yellow-400 font-bold">9.8%</p>
          <p className="text-sm text-red-500">Dangerous</p>
        </div>

        <div className="flex space-x-2">
          <div className="w-1/2 h-2 bg-green-500 rounded-full"></div>
          <div className="w-1/3 h-2 bg-yellow-400 rounded-full"></div>
          <div className="w-1/6 h-2 bg-red-500 rounded-full"></div>
        </div>
      </div>

      {/* Temperature Chart */}
      <div className="mb-10">
        <Line data={chartData} />
      </div>

      {/* Weather Stats */}
      <div className="text-sm text-gray-400">
        <p>Wind: WSW 6 mph</p>
        <p>Humidity: 12%</p>
        <p>Chance of Rain: 50%</p>
      </div>
    </div>
  );
};

export default Sidebar;
