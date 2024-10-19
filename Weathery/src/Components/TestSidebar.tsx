import React from "react"
import { Thermometer } from 'lucide-react';
import { Search } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Line } from 'react-chartjs-2';
import { useState, useEffect } from "react";
import axios from 'axios';

const configValue: string | undefined = import.meta.env.VITE_SOME_CONFIGURATION;
console.log(configValue);




import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip);


interface ImportMetaEnv {
    VITE_SOME_CONFIGURATION: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }


const TestSidebar: React.FC = () => {

    const [apiData, setApiData] = useState([])

     useEffect(() =>{
      const fetchData = async () => {


           console.log(configValue)
          const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${configValue}`)
            console.log(response)
      }
         fetchData()
    }, [])



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

    return(
        <div  className=" flex flex-col items-center justify-center w-1/4 min-h-screen p-6 bg-white/10 backdrop-blur-md rounded-r-3xl shadow-lg border-r  border-r-white  ">
            <div className="flex items-center justify-center flex-row pb-1 border-b border-white/70 w-48">
            <Thermometer className="text-white mr-2" />
            <input 
            placeholder="hey"
                className="bg-transparent text-transparent w-24 focus:outline-none placeholder-transparent" 
                aria-label="Location"
                type="text" 
            />
            <Search className="text-white ml-2" />
        </div>
            <div className="flex justify-center items-center m-5 ">
                <div className="m-5">
                <p>20@</p>
                <p>9.8%</p>
                </div>
                <div className="m-5">
                <p>+-3</p>
                <p>Wind :WSW 6mph%</p>
                </div>
            </div>

            <div className="flex justify-center items-center m-5 ">
                <div className="m-5">
                <Palette/>
                </div>
                <div className="m-5">
                <p>+-3</p>
                <p>Wind :WSW 6mph%</p>
                </div>
            </div>

            <div className="mb-10">
                <Line data={chartData} />
            </div>

            <div className="m-3">
                <h1 className="mb-5">Oklahoma City </h1>
                <p>The air quantity is generally acceltable for most individuals but mostly . For senesitive content amy expereice minro issues to moderate symptoms.</p>
            </div>

           

            

             
        </div>
    )

}
export default TestSidebar


// let weather = {
//   apiKey:"29bd84e33289f196e453fde9559b7bbd",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/forecast?q="
//       +city
//       +"&units=metric&appid="
//       + this.apiKey
//     )