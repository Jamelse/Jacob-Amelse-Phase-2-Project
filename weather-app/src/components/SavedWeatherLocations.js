import React from "react";

function SavedWeatherLocations({savedLocations, savedWeather}){
  
  function findTemp(location){
   return savedWeather.map((value) => {
    if (savedWeather.indexOf(value) == savedLocations.indexOf(location)){
      return `${Math.round(value.temp)}°`
    }
   })
  }

function findTime(location){
  return savedWeather.filter((value) => {
    if (savedWeather.indexOf(value) == savedLocations.indexOf(location)){
      return value
    }
   })
}
  
  return (
    <div className="savedLocationsContainer">
      <h2 className="white-text">Saved Locations</h2>
      {savedLocations.map((location) => {
      return( <div className={findTime(location)[0].weather[0].icon.includes('d') ? 'savedLocationsDay' : 'savedLocationsNight'}>
        <h3 className="left">{location.name}</h3> 
        <h2>{findTemp(location)}</h2>
        <button className="right "><a className="waves-effect waves-teal btn-flat"><i className="material-icons">arrow_drop_down</i></a></button>
        </div>)
      
      })}
    </div>
  )
}

export default SavedWeatherLocations