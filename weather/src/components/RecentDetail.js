import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import WeatherCard from './WeatherCard'

function RecentDetail({ navigate }){
  const [details, setDetails] = useState(null)
  const {id} = useParams();

useEffect(() => {
  fetch(`http://localhost:3000/recent/${id}`)
  .then(r => r.json())
  .then(data => setDetails(data))
}, [id])


if (!details) {
  return <h1 className='white-text center'>Loading...</h1>
}

return (
  <div className='cardContainerDiv'>
     { <WeatherCard 
     currentWeather={details.weather.current} 
     daily={details.weather.daily}
     currentLocation={details.location}
     hourly={details.weather.hourly}
     button={<button 
      onClick={() => navigate('/recent')}
      className='transparent left'><a className="waves-effect waves-light btn transparent">
      <i className="material-icons left ">arrow_back</i>Back</a>
    </button>}/>
    }
   </div>
  )
}

export default RecentDetail