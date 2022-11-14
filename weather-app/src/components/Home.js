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
      buttonClickHandler={buttonClickHandler}
      button={<button 
        onClick={() => buttonClickHandler(currentLocation[0], currentWeather, daily, hourly)}
        className='transparent left'><a className="waves-effect waves-light btn transparent">
          <i className="material-icons left ">add_circle_outline</i>Save Location</a>
          </button>}/>
      : <LocationForm submitHandler={submitHandler} /> }
      </div>
  )
}

export default Home