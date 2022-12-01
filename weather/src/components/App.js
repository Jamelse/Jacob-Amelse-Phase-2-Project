import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home'
import RecentSearch from './RecentSearch'
import {Route, Routes, useNavigate} from 'react-router-dom'
import SavedWeatherLocations from './SavedWeatherLocations'
import WeatherDetail from './WeatherDetail'
import RecentDetail from './RecentDetail'

function App(){
  const [currentWeather, setCurrentWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const [givenLocation, setGivenLocation] = useState(false);
  const [savedLocations, setSavedLocations] = useState([]);
  const [recentSearches, setRecentSearches] = useState([]);
  const navigate = useNavigate();
 
  useEffect(() => {   
    fetch('http://localhost:3000/weather')
    .then(r => r.json())
    .then((data) => setSavedLocations(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/recent')
    .then(r => r.json())
    .then((data) => setRecentSearches(data))
  }, [])

  function onSaveClick(newLocation){  
    setSavedLocations([...savedLocations, newLocation])
  }
  
  function onSearch(newSearch){
    setRecentSearches([...recentSearches, newSearch])
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

  function postHandle(searchedLocation, searchedWeather, checked){
    fetch('http://localhost:3000/recent', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json" 
      },
      body: JSON.stringify({
        location: searchedLocation,
        weather: searchedWeather,
        units: checked ? `C°` : `F°`
      })
    })
    .then(r => r.json())
    .then(currentSearch => onSearch(currentSearch))
  }

  function submitHandler(data, checked){ 
  if(data){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&units=${!checked ? 'imperial' : 'metric'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
    .then(r => r.json())
    .then(locationData => {
      setCurrentWeather(locationData)
      postHandle(data, locationData, checked)
    })
    setLocation(data)
    setGivenLocation(true)
 } 
 }
  
  useEffect(() => { 
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options);
    submitHandler()   
  }, [])

  function removeButtonCLick(deleteTarget){ 
    const removedLocations = savedLocations.filter((locations) => {
      return locations.id !== deleteTarget.id
    })
    setSavedLocations(removedLocations)
    navigate('/locations')
  }

  function  removeButtonRecent(deleteTarget){
    const removedLocations = recentSearches.filter((locations) => {
      return locations.id !== deleteTarget.id
    })
    setRecentSearches(removedLocations)
    navigate('/recent')
  }

  return (
    <div>
      <NavBar submitHandler={submitHandler}/>
      <Routes>
        <Route path='/recent' element={ 
        <RecentSearch searches={recentSearches}
        removeButtonRecent={removeButtonRecent}/> }>
        </Route>
        <Route path='/recent/:id' element={
          recentSearches ? 
          <RecentDetail navigate={navigate}/>
        : <h1 className='white-text center'>Not Found!</h1>}>
        </Route>
        <Route exact path='/locations' element={
        <SavedWeatherLocations 
        savedLocations={savedLocations} 
        removeButtonHandler={removeButtonCLick}/>}>
        </Route>
        <Route  path='/locations/:id' element={
          savedLocations ? 
          <WeatherDetail navigate={navigate}/>
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