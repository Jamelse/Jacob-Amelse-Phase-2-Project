import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'


function NavBar({submitHandler}){
const [newSearch, setNewSearch]= useState('')

function searchHandler(e){
  e.preventDefault();
  fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${newSearch}&limit=4&appid=9b600cedc45f6dc87e1d5d5a50509246
  `).then(r => r.json())
  .then(data => submitHandler(data) )
}

return (
 <nav className="white">
<div className="nav-wrapper">
  <a href="#" className="brand-logo center black-text">Logo</a>  
   <ul className="left hide-on-med-and-down">              
  <li ><NavLink className="black-text"exact to='/'>Home</NavLink></li>
  <li><NavLink className="black-text" to='/locations'>Saved Locations</NavLink></li>
  </ul>
  <ul className='hide-on-med-and-down  right'>
  <li>   
 <form className='search' onSubmit={searchHandler}>
    <i className="material-icons black-text" id='locationSymbol'>location_on</i>
      <input 
      onChange={(e) => setNewSearch(e.target.value)}
      type='text'
      placeholder="Enter Location..."
      value={newSearch}
      />
      <button type='submit' id='searchButtonNav'>
        <i className="material-icons">search</i>
        </button>
    </form>
  </li>  </ul>
  </div>
  </nav>
)
}

export default NavBar