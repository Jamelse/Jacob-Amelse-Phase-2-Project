import React from 'react'
import WeatherCard from './WeatherCard'
import LocationForm from './LocationForm'

function Home({currentWeather, givenLocation, daily, currentLocation, unitsHandler, hourly}){
 

  return (
    <div id='homeDiv'>
      {givenLocation ? <WeatherCard 
      currentWeather={currentWeather} 
      daily={daily}
      currentLocation={currentLocation}
      unitsHandler={unitsHandler}
      hourly={hourly}/>: <LocationForm /> }
      </div>
  )
}

export default Home