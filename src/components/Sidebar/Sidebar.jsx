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
       <div className="d-flex flex-column flex-shrink-0" style={{width: '7rem'}}>
        <NavLink to="/" className="brand text-decoration-none text-center mb-3" title="Icon-only" data-bs-toggle="tooltip">
          Firebase Contact App
        </NavLink>
        <ul className="nav nav-pills nav-flush flex-column">
          <li>
            <button onClick={() => navigate("/contact-list")} className="nav-link my-3" data-bs-toggle="tooltip">
              <img src={ContactList} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/add-contact")} className="nav-link my-3" data-bs-toggle="tooltip">
            <img src={AddContact} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/search")} className="nav-link my-3" data-bs-toggle="tooltip">
              <img src={Search} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/profile")} className="nav-link my-3" data-bs-toggle="tooltip">
            <img src={Profile} width={40} alt="" />
            </button>
          </li> 
        </ul> 
      </div> 
    </div>
  )
}

export default Sidebar