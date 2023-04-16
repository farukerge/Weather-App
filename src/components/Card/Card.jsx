import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { SiWindicss } from 'react-icons/si'
import { IoIosWater } from 'react-icons/io'
import { WiSunrise } from 'react-icons/wi'
import { TbSunset2 } from 'react-icons/tb'
import moment from 'moment/moment';

const Card = () => {
  const state = useSelector(state => state)
  const { weather, loading, error } = state;

  const sunset = moment(weather?.sys.sunset * 1000).format("HH:mm ");
  const sunrise = moment(weather?.sys.sunrise * 1000).format("HH:mm ");
  const dt = moment(weather?.dt).format('dddd')

  return ( 
    <main className='flex w-full justify-center'>
      <div className="flex p-6 flex-col  w-96   border-gray-200 rounded-lg shadow md:max-w-xl  bg-[#023e8a] text-white">
        <div className='flex w-full justify-between'>
            <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{ weather?.name }</p>
            <p className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">{ dt }</p>
        </div>
        <div className='flex flex-col justify-center text-center'>
          <h1 className="mb-3  text-4xl font-normal ">{Math.round(weather?.main.temp)} °C</h1> 
          <p className="mb-3 font-normal ">{ weather?.weather[0].main }</p>
        </div>
        <div className='flex justify-between items-center'>
          <div>
            <p className=" flex  items-center mb-3 font-normal"><SiWindicss className='mr-2' />{Math.round(weather?.wind.speed)}km/h</p>
            <p className=" flex items-center mb-3 font-normal"><IoIosWater className='mr-2' />{Math.round( weather?.main.humidity)}%</p>
          </div>
          <div>
            <img className=' w-36' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" /><h1>{ }</h1>
          </div>
        </div>  
        <div className='flex justify-between'>
          <h1 className='flex items-center'><WiSunrise className='text-lg mr-1' /> {sunset}</h1>
          <h1 className='flex items-center'><TbSunset2 className='text-lg mr-1' /> {sunrise}</h1>
        </div>
     </div>
    </main>
  )
}

export default Card