import React, {useState} from 'react'
import WeatherIcon from './WeatherIcon'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'


function WeatherCard({ currentWeather, currentLocation, daily, hourly, unitsHandler, buttonClickHandler }){
const [tempCheck, setTempCheck] = useState(false)

  function onChangeHandler(e){
    setTempCheck(e.target.checked)
      unitsHandler()
  }



return (
    <>
      {currentWeather && daily ?  
        <div className={currentWeather.weather[0].icon.includes('d') ? 'weatherContainerDay z-depth-3' : 'weatherContainerNight z-depth-3'}>
          <button onClick={() => buttonClickHandler(currentLocation[0], currentWeather)}className='transparent left'><a className="waves-effect waves-light btn transparent"><i className="material-icons left ">add_circle_outline</i>Save Location</a></button>
        <div className="switch right">
    <label className="white-text">
      F°
      <input type="checkbox"  
      checked={tempCheck}
      onChange={onChangeHandler}/>
      <span className="lever grey"></span>
        C°
    </label>
        </div>
        <h3 className='locationHeader'>{currentLocation[0].name}</h3>
        <p>{currentWeather.weather[0].main}</p>
        <WeatherIcon icon={currentWeather.weather[0].icon} size={250}/>
        <p className='temperature'>{`${Math.round(currentWeather.temp)}°`}</p>
        <p className='daily'>{`H:${Math.floor(daily[0].temp.max)}°  L:${Math.floor(daily[0].temp.min)}°`}</p>
    
        <HourlyWeather weather={hourly}/>
        <DailyWeather weather={daily}/>
      </div> : <h1 className='white-text'>Getting Weather...</h1>} </>
  
  )
}

export default WeatherCard

