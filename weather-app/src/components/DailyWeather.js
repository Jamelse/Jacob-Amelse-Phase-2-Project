import React from 'react'
import WeatherIcon from './WeatherIcon'

// Component that renders the daily weather outlook for the next 7 days

function DailyWeather({weather}){
 
  function dayDisplay(day){ // Helper function to turn the new Date into days of the week
    const getDay = day.toLocaleString('default', {weekday: 'long'})
    return getDay
  }
 
 return (
 <div className='dailyWeatherContainter'>
  {weather ? weather.slice(1).map((day) => {
    return (
    <div key={day.dt} className='dailyWeather row'>
    <p className='col s1'>{dayDisplay(new Date( day.dt * 1000))}</p>
      <WeatherIcon  icon={day.weather[0].icon} size={25}/>
      <ul className='right'>
        <li className='dailyHigh'>{Math.round(day.temp.max)}</li>
        <li className='dailyLow'>{Math.round(day.temp.min)}</li>
        </ul>      
        </div>
    )}) : null}
  </div>
  )
}

export default DailyWeather