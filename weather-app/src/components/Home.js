import React from 'react'
import WeatherCard from './WeatherCard'
import LocationForm from './LocationForm'

// Home component that renders the searched or given location weather card

function Home({savedLocations, submitHandler, currentWeather, givenLocation, daily, currentLocation, hourly, onSaveClick}){

  function savedData(name){
  const checkedLocation = savedLocations.map((loc) => {
      return loc.location[0].name
     })
  
  if (!checkedLocation.includes(name)){
    const saveData = {
      location: currentLocation,
      weather: currentWeather,
      daily: daily,
      hourly: hourly
      }
     fetch('http://localhost:3000/weather', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify(saveData)
    })
    .then(r => r.json())
    .then((data) => {
      onSaveClick(data)
    })}
  }
 
return (
    <div className='cardContainerDiv'>
      {givenLocation ?  // If given location (geolocation permissions) is true, render the weather card. Else, render the location form (a search box).
      <WeatherCard 
      currentWeather={currentWeather} 
      daily={daily}
      currentLocation={currentLocation}
      hourly={hourly}
      button={
      <button 
         onClick={() => savedData(currentLocation[0].name)}
          className='transparent left'><a className="saveButton waves-effect waves-light btn transparent">
          <i className="material-icons left ">add_circle_outline</i>Save Location</a>
      </button>}/>
      : <LocationForm submitHandler={submitHandler} /> }
      </div>
  )
}

export default Home