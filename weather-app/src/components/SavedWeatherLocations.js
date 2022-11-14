import React from "react";
import WeatherIcon from "./WeatherIcon";
import {Link} from 'react-router-dom'

function SavedWeatherLocations({savedLocations, savedWeather, removeButtonHandler}){
  
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
    <>
    <h2 className="savedLocationHeader white-text">Saved Locations</h2>
    <div className="savedLocationsContainer">
      
      {savedLocations.map((location) => {
      return( <div key={location.name} className={findTime(location)[0].weather[0].icon.includes('d') ? 'savedLocationsDay  z-depth-3' : 'savedLocationsNight  z-depth-3'}>
        <button 
        onClick={()=> removeButtonHandler(location)}
        className="removeButton transparent left waves-effect waves-red">
          <i className="removeIcon material-icons small white-text" >remove</i></button>
        <br></br>
        <h2 className="savedWeatherName">{location.name}</h2> 
        <WeatherIcon icon={findTime(location)[0].weather[0].icon} size={100}/>
        <h3 className="savedWeatherTemp">{findTemp(location)}</h3>
        <button className="savedWeatherButton transparent"><Link to={`/locations/${savedLocations.indexOf(location)}`}><i className="material-icons medium white-text">arrow_drop_down</i></Link></button>
        </div>)
      
      })}
    </div>
    </>
  )
}

export default SavedWeatherLocations