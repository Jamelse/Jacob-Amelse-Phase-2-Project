import React, {useState, useEffect} from 'react'
import NavBar from './NavBar'
import Home from './Home'



function App(){
  const [currentWeather, setCurrentWeather] = useState([])
  const [location, setLocation] = useState([])
  const [units, setUnits] = useState(true)
  const [givenLocation, setGivenLocation] = useState(false)

  const successCallback = (position) => {
   fetch (`https://api.openweathermap.org/data/3.0/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${units ? 'imperial' : 'metric'}&appid=9b600cedc45f6dc87e1d5d5a50509246`)
         .then(r => r.json())
        .then(data => setCurrentWeather(data))
  fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&limit=2&appid=9b600cedc45f6dc87e1d5d5a50509246`)
  .then(r => r.json())
  .then(data => setLocation(data))
        setGivenLocation(true)
  };
  const options = {
    enableHighAccuracy: true,
  };
  
  const errorCallback = (error) => {
    console.log(error);
    setGivenLocation(false)
  };
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, options)      
  }, [units])

  function unitsHandler(){
    setUnits(units => !units)
  }

  return (
    <div>
      <NavBar />
       <Home daily={currentWeather.daily}
       currentWeather={currentWeather.current} 
       givenLocation={givenLocation}
       currentLocation={location}
       unitsHandler={unitsHandler}
       hourly={currentWeather.hourly}/>
    </div>
  )
}

export default App