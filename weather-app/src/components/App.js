import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home'
import {Route, Routes} from 'react-router-dom'
import LocationForm from './LocationForm'
import SavedWeatherLocations from './SavedWeatherLocations'



function App(){
  const [currentWeather, setCurrentWeather] = useState([])
  const [location, setLocation] = useState([])
  const [units, setUnits] = useState(true)
  const [givenLocation, setGivenLocation] = useState(false)
  const [savedLocations, setSavedLocations] = useState([])

  function saveButtonClick(location){
    if (!savedLocations.includes(location)){
      setSavedLocations([...savedLocations, location])
    }
  }

  const successCallback = (position) => {
   fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units ? 'imperial' : 'metric'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
         .then(r => r.json())
        .then(data => setCurrentWeather(data))
  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=9b600cedc45f6dc87e1d5d5a50509246`)
  .then(r => r.json())
  .then(data => setLocation(data))
        setGivenLocation(true)
  };
  const options = {
    enableHighAccuracy: true,
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };

  function submitHandler(data){
  if(data){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=${units ? 'imperial' : 'metric'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
    .then(r => r.json())
    .then(locationData => {
      setCurrentWeather(locationData)
    })
    setLocation(data)
    setGivenLocation(true)
 } 
 }
  
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);   
  }, [units])

  useEffect(() => {
    submitHandler();   
  }, [units])
  

  function unitsHandler(){
    setUnits(units => !units)
  }


  return (
    <div>
      <NavBar submitHandler={submitHandler}/>
      <Routes>
        <Route path='/locations' element={<SavedWeatherLocations savedLocations={savedLocations} savedWeather={currentWeather}/>}>
        </Route>
      <Route exact path='/' element={<Home 
       submitHandler={submitHandler}
       daily={currentWeather.daily}
       currentWeather={currentWeather.current} 
       givenLocation={givenLocation}
       currentLocation={location}
       unitsHandler={unitsHandler}
       hourly={currentWeather.hourly}
       buttonClickHandler={saveButtonClick}/>}>
      </Route>
       </Routes>
    </div>
    
  )
}

export default App