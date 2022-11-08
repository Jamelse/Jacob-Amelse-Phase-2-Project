import React from "react";

function SavedWeatherLocations({savedLocations, savedWeather}){
  console.log(savedLocations)
  console.log(savedWeather)

  return (
    <div className="savedLocationsContainer">
      <h2 className="white-text">Saved Locations</h2>
      {savedLocations.map((location) => {
      return( <h3>{location.name}</h3>)
      
      })}
    </div>
  )
}

export default SavedWeatherLocations