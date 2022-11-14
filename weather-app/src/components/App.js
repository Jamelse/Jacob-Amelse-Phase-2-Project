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
  const [savedWeather, setSavedWeather] = useState([])
  const [savedDaily, setSavedDaily] = useState([])
  const [savedHourly, setSavedHourly] = useState([])
  const navigate = useNavigate();

  function saveButtonClick(location, weather, daily, hourly){
    const mappedLocations = savedLocations.map((loc) => {
      return loc.name
    })
    const mappedWeather = savedWeather.map((wet) => {
      return wet.temp
    })
    
    if (!mappedLocations.includes(location.name) && !mappedWeather.includes(weather.temp)){
      setSavedLocations([...savedLocations, location])
      setSavedWeather([...savedWeather, weather])
      setSavedDaily([...savedDaily, daily])
      setSavedHourly([...savedHourly, hourly])
    }
  }

  const successCallback = (position) => {
   fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${'imperial'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
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

  function removeButtonCLick(card){
    const removedLocations = savedLocations.filter((location) => {
      return location.name !== card.name
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
        savedWeather={savedWeather}
        removeButtonHandler={removeButtonCLick}/>}>
        </Route>
        <Route  path='/locations/:index' element={
          <WeatherDetail 
          savedLocation={savedLocations} 
          savedWeather={savedWeather}
          savedDaily={savedDaily}
          savedHourly={savedHourly}
          removeButtonCLick={removeButtonCLick}/>
        }></Route>
      <Route exact path='/' element={
      <Home 
       submitHandler={submitHandler}
       daily={currentWeather.daily}
       currentWeather={currentWeather.current} 
       givenLocation={givenLocation}
       currentLocation={location}
       hourly={currentWeather.hourly}
       buttonClickHandler={saveButtonClick}/>}>
      </Route>
       </Routes>
    </div>
    
  )
}

export default App