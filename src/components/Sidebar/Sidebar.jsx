import React from 'react'
import {useNavigate} from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate()
  return (
    <div>
      <ul>
        <button onClick={() => navigate("/search")}>Search</button>
        <button onClick={() => navigate("/contact-list")}>Contact List</button>
        <button onClick={() => navigate("/add-contact")}>Add Contact</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </ul>
    </div>
  )
}

export default Sidebar