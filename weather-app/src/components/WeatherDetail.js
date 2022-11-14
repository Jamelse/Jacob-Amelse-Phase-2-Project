import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherCard from './WeatherCard'

function WeatherDetail({savedLocation, savedWeather, savedDaily, savedHourly}){
  const {index} = useParams();
  
const location = savedLocation.filter((location) => {
  return savedLocation.indexOf(location) == index;
})
const filteredWeather = savedWeather.filter((weather) => {
  return savedWeather.indexOf(weather) == index;
})
const daily = savedDaily.filter((day) => {
  return savedDaily.indexOf(day) == index;
})
const hourly = savedHourly.filter((hour) => {
  return savedHourly.indexOf(hour) == index;
})

if (!savedWeather) return  <h2 className='white-text'>Loading...</h2>


  return (<div className='cardContainerDiv'>
    {savedWeather && savedDaily ? 
  <WeatherCard 
    currentWeather={filteredWeather[0]} 
    daily={daily[0]}
    currentLocation={location}
    hourly={hourly[0]}
    /> : <h2>Loading...</h2>}
    </div>)
}

export default WeatherDetail