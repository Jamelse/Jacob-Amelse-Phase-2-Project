import React, {useState} from "react";

// Component that renders in home page if no geolocation permissions are given. Renders a search box input field

function LocationForm({submitHandler}){
const [search, setSearch] = useState('') // Controlled component state for the search box


function onSubmitHandler(e){  // Submit handler function that fetches location data based on search input. Then pushes this data to the submitHandler function located in App component
  e.preventDefault();
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=4&appid=9b600cedc45f6dc87e1d5d5a50509246
  `).then(r => r.json())
  .then(data => submitHandler(data) )
}

  return (
  <div id='searchForm'>
    <form className='search' onSubmit={onSubmitHandler}>
    <i className="material-icons" id='locationSymbol'>  location_on</i>
      <input 
      onChange={(e) => setSearch(e.target.value)}
      type='text'
      placeholder="Enter Location..."
      value={search}/>
      <button type='submit' id='searchButton'>
        <i className="material-icons">search</i>
        </button>
    </form>
  </div>
)
}

export default LocationForm