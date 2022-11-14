import React from 'react'
import { useParams } from 'react-router-dom'
import WeatherCard from './WeatherCard'

// Component that displays a weather card for a saved location when the dropdown arrow is clicked

function WeatherDetail({savedLocation, savedWeather, savedDaily, savedHourly, removeButtonCLick}){
  const {index} = useParams();
  
const location = savedLocation.filter((location) => { // Matches saved location based on index of array that matches with the page Params
  return savedLocation.indexOf(location) == index;
})
const filteredWeather = savedWeather.filter((weather) => {  // Matches saved weather based on index of array that matches with the page Params
  return savedWeather.indexOf(weather) == index;
})
const daily = savedDaily.filter((day) => {  // Matches saved daily weather based on index of array that matches with the page Params
  return savedDaily.indexOf(day) == index;
})
const hourly = savedHourly.filter((hour) => { // Matches saved hourly weather based on index of array that matches with the page Params
  return savedHourly.indexOf(hour) == index;
})

if (!savedWeather) return  <h2 className='white-text'>Loading...</h2>

  return (
  <div className='cardContainerDiv'>
    {savedWeather && savedDaily ? 
    <WeatherCard 
    currentWeather={filteredWeather[0]} 
    daily={daily[0]}
    currentLocation={location}
    hourly={hourly[0]}
    button={
    <button 
      onClick={() => removeButtonCLick(location[0])}
      className='transparent left'><a className="waves-effect waves-light btn transparent">
      <i className="material-icons left ">remove_circle_outline</i>Remove Location</a>
    </button>}/> 
    : <h2>Loading...</h2>}
    </div>
    )
}

export default WeatherDetail