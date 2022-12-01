import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WeatherCard from './WeatherCard'

function WeatherDetail({removeButtonCLick}){
  const [details, setDetails] = useState(null)
  const {id} = useParams();

useEffect(() => {
  fetch(`http://localhost:3000/weather/${id}`)
  .then(r => r.json())
  .then(data => setDetails(data))
}, [id])

if (!details) {
  return <h1 className='white-text center'>Loading...</h1>
}

function removeButtonHandle(location){
  fetch(`http://localhost:3000/weather/${location.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => removeButtonCLick(location))
}

return (
  <div className='cardContainerDiv'>
     { <WeatherCard 
     currentWeather={details.weather} 
     daily={details.daily}
     currentLocation={details.location}
     hourly={details.hourly}
     button={
     <button 
       onClick={() => removeButtonHandle(details)}
       className='transparent left'><a className="removeIcon waves-effect waves-light btn transparent">
       <i className="material-icons left ">remove_circle_outline</i>Remove Location</a>
     </button>}/> }
     </div>
  )
}

export default WeatherDetail