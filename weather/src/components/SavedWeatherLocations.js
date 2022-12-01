import React from "react";
import WeatherIcon from "./WeatherIcon";
import {Link} from 'react-router-dom'

function SavedWeatherLocations({savedLocations, removeButtonHandler}){
  
  function handleDelete(location){
    fetch(`http://localhost:3000/weather/${location.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => removeButtonHandler(location))
  }

  return (
    <>
    <h2 className="savedLocationHeader white-text">Saved Locations</h2>
    <div className="savedLocationsContainer">
    { savedLocations.map((saved) => {
      return (
        <div key={saved.location[0].name} className={saved.weather.weather[0].icon.includes('d') ? 'savedLocationsDay  z-depth-3' : 'savedLocationsNight  z-depth-3'}>
          <button 
           onClick={() => handleDelete(saved)}
          className="removeButton transparent left waves-effect waves-red">
          <i className="removeIcon material-icons small" >remove</i></button>
          <br></br>
          <h2 className="savedWeatherName">{saved.location[0].name}</h2>
          <WeatherIcon icon={saved.weather.weather[0].icon} size={100}/>
          <h3 className="savedWeatherTemp">{`${Math.round(saved.weather.temp)}°`}</h3>
          <button className="savedWeatherButton transparent">
           <Link to={`/locations/${saved.id}`}><p className="detailText">Detail</p><i className="material-icons small white-text">arrow_drop_down</i></Link>
          </button>
        </div>
       )
    }
    )}
  </div>
  </>
  )
}

export default SavedWeatherLocations