import React from 'react'
import WeatherIcon from './WeatherIcon'
import HourlyWeather from './HourlyWeather'
import DailyWeather from './DailyWeather'

// Component that displays a weather card for all the weather and location data

function WeatherCard({ currentWeather, currentLocation, daily, hourly, button}){

return (
    <>
      {currentWeather && daily ?  
        <div className={currentWeather.weather[0].icon.includes('d') ? 'weatherContainerDay z-depth-3' : 'weatherContainerNight z-depth-3'}>
          { button }
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

