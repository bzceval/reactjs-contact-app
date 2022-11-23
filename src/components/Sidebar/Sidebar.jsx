import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import "./Sidebar.scss"
import AddContact from '../../assets/add-contact.png'
import ContactList from '../../assets/contact-list.png'
import Search from '../../assets/search-contact.png'
import Profile from '../../assets/profile.png'

const Sidebar = () => {
  const navigate = useNavigate()
  
  return (
    <div className='sidebar-container'>
       <div className="d-flex flex-column text-center">
        <NavLink to="/" className="brand text-decoration-none mb-3 mt-3 border-bottom">
          Firebase Contact App
        </NavLink>
        <ul className="nav nav-pills nav-flush flex-column"> 
          <li onClick={() => navigate("/contact-list")} className='d-flex justify-content-center'>
            <button className="nav-link">
              <img src={ContactList} width={25} alt="contact list" />
              <p>Contact List</p>
            </button>
          </li>

          <li onClick={() => navigate("/add-contact")} className='d-flex justify-content-center'>
            <button className="nav-link">
            <img src={AddContact} width={25} alt="add contact" />
            <p>Add Contact</p>
            </button>
          </li>

          <li onClick={() => navigate("/search")} className='d-flex justify-content-center'>
            <button className="nav-link">
              <img src={Search} width={25} alt="search contact" />
              <p>Search</p>
            </button>
          </li>

          <li onClick={() => navigate("/profile")} className='d-flex justify-content-center'>
            <button className="nav-link">
            <img src={Profile} width={25} alt="profile" />
            <p>Profile</p>
            </button>
          </li> 

        </ul> 
      </div> 
    </div>
  )
}

export default Sidebar