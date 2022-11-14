import React, {useState} from 'react'
import WeatherIcon from './WeatherIcon'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'


function WeatherCard({ currentWeather, currentLocation, daily, hourly, buttonClickHandler}){
const [home, setHome] = useState(false)

function homeClickHandler(){
  setHome((home) => !home)
}

return (
    <>
      {currentWeather && daily ?  
        <div className={currentWeather.weather[0].icon.includes('d') ? 'weatherContainerDay z-depth-3' : 'weatherContainerNight z-depth-3'}>
          <button 
          onClick={() => buttonClickHandler(currentLocation[0], currentWeather, daily, hourly)}
          className='transparent left'><a className="waves-effect waves-light btn transparent">
            <i className="material-icons left ">add_circle_outline</i>Save Location</a>
            </button>
        {/* <button onClick={homeClickHandler}className='homeButton right waves-effect waves-light transparent'><i className="material-icons small amber-text">{home ? 'star' : 'star_border'}</i></button> */}
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

