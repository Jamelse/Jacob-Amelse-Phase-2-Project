import React from 'react'
import WeatherCard from './WeatherCard'
import LocationForm from './LocationForm'

function Home({buttonClickHandler, submitHandler, currentWeather, givenLocation, daily, currentLocation, hourly}){
 

  return (
    <div className='cardContainerDiv'>
      {givenLocation ? <WeatherCard 
      currentWeather={currentWeather} 
      daily={daily}
      currentLocation={currentLocation}
      hourly={hourly}
      buttonClickHandler={buttonClickHandler}/>
      : <LocationForm submitHandler={submitHandler} /> }
      </div>
  )
}

export default Home