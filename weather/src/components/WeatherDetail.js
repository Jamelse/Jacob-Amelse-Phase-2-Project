import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WeatherCard from './WeatherCard'

function WeatherDetail({navigate}){
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

return (
  <div className='cardContainerDiv'>
     { <WeatherCard 
     currentWeather={details.weather} 
     daily={details.daily}
     currentLocation={details.location}
     hourly={details.hourly}
     button={<button 
      onClick={() => navigate('/locations')}
      className='transparent left'><a className="waves-effect waves-light btn transparent">
      <i className="material-icons left ">arrow_back</i>Back</a>
    </button>}/>
    }
   </div>
  )
}

export default WeatherDetail