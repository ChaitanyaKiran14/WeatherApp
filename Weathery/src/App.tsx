import './App.css'

import React from 'react';
import Header from './Components/Header';
 import WeatherDetails from './Components/WeatherDetails';
import ForecastCard from './Components/ForecastCard';
import TestSidebar from './Components/TestSidebar';
import Sidebar from './Components/Sidebar';




  const App: React.FC = () => {
    return (
       <div className="relative min-h-screen   text-white flex overflow-hidden">
       <video
          className="absolute inset-0 object-cover w-full h-full -z-10"
         src="/Media/3052162-hd_1920_1080_24fps.mp4"
         autoPlay
        loop
         muted
         />
       <TestSidebar/>
  
       <div className="flex-1 p-6">
          <Header />
          <WeatherDetails />
         <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
           <ForecastCard city="Washington D.C" high={20} low={18} />
           <ForecastCard city="Oklahoma City" high={17} low={13} />
           <ForecastCard city="Philadelphia" high={14} low={10} />
            <ForecastCard city="San Francisco" high={12} low={10} />
            <ForecastCard city="New York City" high={10} low={-4} />
           <ForecastCard city="South Dakota" high={-8} low={-12} />
          </div>
        </div>
       </div>
    );
  };

export default App;