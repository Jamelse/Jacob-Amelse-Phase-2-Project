import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home'
import {Route, Routes, useNavigate} from 'react-router-dom'
import SavedWeatherLocations from './SavedWeatherLocations'
import WeatherDetail from './WeatherDetail'

function App(){
  const [currentWeather, setCurrentWeather] = useState([])
  const [location, setLocation] = useState([])
  const [givenLocation, setGivenLocation] = useState(false)
  const [savedLocations, setSavedLocations] = useState([])
  const navigate = useNavigate();
 
  useEffect(() => {   
    fetch('http://localhost:3000/weather')
    .then(r => r.json())
    .then((data) => setSavedLocations(data))
  }, [])

  function onSaveClick(newLocation){  
    setSavedLocations([...savedLocations, newLocation])
  }
 
  const successCallback = (position) => { 
   fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${'imperial'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
         .then(r => r.json())
        .then(data => setCurrentWeather(data))
  fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=1&appid=9b600cedc45f6dc87e1d5d5a50509246`)
  .then(r => r.json())
  .then(data => setLocation(data))
        setGivenLocation(true)
  };
  
  const options = { 
    enableHighAccuracy: true,
  };
  
  const errorCallback = (error) => {  
    console.log(error)
  };

  function submitHandler(data){ 
  if(data){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=${'imperial'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
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
    submitHandler()   
  }, [])

  function removeButtonCLick(deleteTarget){ // Handler function for the remove button on a weather card
    const removedLocations = savedLocations.filter((locations) => {
      return locations.id !== deleteTarget.id
    })
    setSavedLocations(removedLocations)
    navigate('/locations')
  }

  return (
    <div>
      <NavBar submitHandler={submitHandler}/>
      <Routes>
        <Route exact path='/locations' element={
        <SavedWeatherLocations 
        savedLocations={savedLocations} 
        removeButtonHandler={removeButtonCLick}/>}>
        </Route>
        <Route  path='/locations/:id' element={
          savedLocations ? 
          <WeatherDetail 
          savedLocation={savedLocations} 
          removeButtonCLick={removeButtonCLick}/>
        : <h1 className='white-text center'>Not Found!</h1>}></Route>
      <Route exact path='/' element={
      <Home 
      savedLocations={savedLocations}
       submitHandler={submitHandler}
       daily={currentWeather.daily}
       currentWeather={currentWeather.current} 
       givenLocation={givenLocation}
       currentLocation={location}
       hourly={currentWeather.hourly}
       onSaveClick={onSaveClick}/>}>
      </Route>
      <Route path='*' element={
        <h1 className='white-text'>Not Found!</h1>
      }></Route>
       </Routes>
    </div>
  )
}

export default App