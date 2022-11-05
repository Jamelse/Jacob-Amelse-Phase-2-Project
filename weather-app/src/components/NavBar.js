import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'


function NavBar(){
const [newSearch, setNewSearch]= useState('')

return (
 <nav className="white">
<div className="nav-wrapper">
  <a href="#" className="brand-logo center black-text">Logo</a>  
   <ul className="left hide-on-med-and-down">              
  <li ><NavLink className="black-text"exact to='/'>Home</NavLink></li>
  <li><a href='#' className="black-text">Saved Locations</a></li>
  </ul>
  <ul className='hide-on-med-and-down  right'>
  <li>   
 <form className='search'>
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