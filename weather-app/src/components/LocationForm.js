import React, {useState} from "react";

function LocationForm({props}){
const [search, setSearch] = useState('')


  return (
  <div id='searchForm'>
    <form className='search'>
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