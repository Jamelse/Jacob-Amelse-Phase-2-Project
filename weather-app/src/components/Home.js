import React from 'react'
import WeatherCard from './WeatherCard'
import LocationForm from './LocationForm'

function Home({submitHandler, currentWeather, givenLocation, daily, currentLocation, unitsHandler, hourly}){
 

  return (
    <div id='homeDiv'>
      {givenLocation ? <WeatherCard 
      currentWeather={currentWeather} 
      daily={daily}
      currentLocation={currentLocation}
      unitsHandler={unitsHandler}
      hourly={hourly}/>: <LocationForm submitHandler={submitHandler}/> }
      </div>
  )
}

export default Home