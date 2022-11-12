import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NoFetched.scss"

const NoFetched = () => {
  return (
    <div className='no-fetched'>
      <p>You do not have a Contact List. To add it, go to your <NavLink to={"/add-contact"}> Add Contact</NavLink> page.</p>
    </div>
  )
}

export default NoFetched