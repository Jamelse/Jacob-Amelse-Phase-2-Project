import React, {useState} from "react";

function LocationForm({submitHandler, setApiLink}){
const [search, setSearch] = useState('')

function onSubmitHandler(e){
  e.preventDefault();
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=4&appid=9b600cedc45f6dc87e1d5d5a50509246
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
      value={search}
      />
      <button type='submit' id='searchButton'>
        <i className="material-icons">search</i>
        </button>
    </form>
  </div>
)
}

export default LocationForm