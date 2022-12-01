import React, {useState} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

function NavBar({submitHandler}){
const [newSearch, setNewSearch]= useState('')
const [checked, setChecked] = useState(false) 
const navigate = useNavigate();

function onCheckHandler(e){
  setChecked(e.target.checked)
}

function searchHandler(e){ 
  e.preventDefault();
  fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${newSearch}&limit=4&appid=9b600cedc45f6dc87e1d5d5a50509246
  `).then(r => r.json())
  .then(data => submitHandler(data, checked) )
  navigate('/')
}

return (
 <nav className="navbar">
  <div className="nav-wrapper">
    <p className="brand-logo center white-text">Jamelse Weather</p>  
    <ul className="left hide-on-med-and-down">              
      <li><NavLink className="navHome" exact to='/'>Home</NavLink></li>
      <li><NavLink className="navLocation" exact to='/locations'>Saved Locations</NavLink></li>
      <li><NavLink className="navRecent" exact to='/recent'>Recent</NavLink></li>
    </ul>
    <ul className='hide-on-med-and-down  right'>
      <li>   
        <form className='navsearch' onSubmit={searchHandler}>
        <div className="searchSwtich switch right">
    <label className="white-text">
      F°
      <input type="checkbox"  
       checked={checked}
       onChange={onCheckHandler}
      />
      <span className="lever grey"></span>
        C°
    </label>
    </div>
        <i className="material-icons white-text" id='locationSymbol'>location_on</i>
        <input 
        onChange={(e) => setNewSearch(e.target.value)}
        type='text'
        placeholder="Enter Location..."
        value={newSearch}/>
        <button type='submit' id='searchButtonNav'>
        <i className="material-icons">search</i>
        </button>
        </form>
      </li>
    </ul>
  </div>
  </nav>
  )
}

export default NavBar