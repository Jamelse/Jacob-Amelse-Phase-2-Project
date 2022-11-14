import React from 'react'
import WeatherCard from './WeatherCard'
import LocationForm from './LocationForm'

// Home component that renders the searched or given location weather card

function Home({buttonClickHandler, submitHandler, currentWeather, givenLocation, daily, currentLocation, hourly}){
 
return (
    <div className='cardContainerDiv'>
      {givenLocation ?  // If given location (geolocation permissions) is true, render the weather card. Else, render the location form (a search box).
      <WeatherCard 
      currentWeather={currentWeather} 
      daily={daily}
      currentLocation={currentLocation}
      hourly={hourly}
      buttonClickHandler={buttonClickHandler}
      button={
      <button 
        onClick={() => buttonClickHandler(currentLocation[0], currentWeather, daily, hourly)}
        className='transparent left'><a className="waves-effect waves-light btn transparent">
          <i className="material-icons left ">add_circle_outline</i>Save Location</a>
          </button>}/>
      : <LocationForm submitHandler={submitHandler} /> }
      </div>
  )
}

export default Home