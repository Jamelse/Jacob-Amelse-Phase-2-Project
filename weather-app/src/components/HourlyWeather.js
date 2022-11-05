import React from "react";
import WeatherIcon from "./WeatherIcon";

function HourlyWeather({weather}){

  function getTime(time){
  let hours = time.getHours();
  let period = "AM"
  if(hours >= 12){
    period = 'PM'
  }
  hours = hours >= 12 ? hours % 12 : hours;
  if(hours === 0){
    hours = 12
  }

  return `${hours}${period} `
} 


  return (
    <>
      {weather ? <div className="hourlyWeatherContainter row">
      {weather.slice(0, 0 + 6).map((hour) => {
        return (<div key={hour.dt}className="col s2">
        <p>{getTime(new Date( hour.dt * 1000))}</p>
          <WeatherIcon className="col s1" icon={hour.weather[0].icon} size={25}/>
          <p>{`${Math.round(hour.temp)}°`}</p>
          </div>)
      })}
      </div> : null}
    </>
  )
}

export default HourlyWeather