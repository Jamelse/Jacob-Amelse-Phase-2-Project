import React from 'react'
import {Link} from 'react-router-dom'
import WeatherIcon from './WeatherIcon'

function RecentSearch({searches, removeButtonRecent}){

  function handleRecentDelete(location){
    fetch(`http://localhost:3000/recent/${location.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => removeButtonRecent(location))
  }

  return (
  <div>
    {searches.map((search) => {
      return (
        <div key={search.id} className={search.weather.current.weather[0].icon.includes('d') ? 'savedSearchesDay  z-depth-3' : 'savedSearchesNight  z-depth-3'}>
          <button
          onClick={() => handleRecentDelete(search)}
            className="removeButton transparent left">
            <i className="removeIcon material-icons tiny" >remove</i>
          </button>
          {console.log(search)}
          <h3>{search.location[0].name}</h3>
          <WeatherIcon icon={search.weather.current.weather[0].icon} size={100}/>
          <h3>{`${Math.round(search.weather.current.temp)} ${search.units}`}</h3>
          <button className='saveButton transparent'>
              <Link className="saveButton transparent" to={`/recent/${search.id}`}><i className="material-icons small" >add_circle_outline</i></Link>
          </button>
        </div>
      )
    })}
  </div>
  )
}

export default RecentSearch