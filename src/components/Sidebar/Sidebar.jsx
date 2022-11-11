import React from 'react'
import {useNavigate} from 'react-router-dom'
import "./Sidebar.scss"
import AddContact from '../../assets/add-contact.png'
import ContactList from '../../assets/contact-list.png'
import Search from '../../assets/search-contact.png'
import Profile from '../../assets/profile.png'

const Sidebar = () => {
  const navigate = useNavigate()
  
  return (
    <div>
       <div className="d-flex flex-column flex-shrink-0 bg-light" style={{width: '4.5rem'}}>
        <a href="/" className="d-block p-3 link-dark text-decoration-none" title="Icon-only" data-bs-toggle="tooltip" data-bs-placement="right">
          Icon Only
        </a>
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <button onClick={() => navigate("/contact-list")} className="nav-link py-3 border-bottom rounded-0" aria-current="page" title="Home" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src={ContactList} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/add-contact")} className="nav-link py-3 border-bottom rounded-0" title="Dashboard" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src={AddContact} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/search")} className="nav-link py-3 border-bottom rounded-0" title="Orders" data-bs-toggle="tooltip" data-bs-placement="right">
              <img src={Search} width={40} alt="" />
            </button>
          </li>
          <li>
            <button onClick={() => navigate("/profile")} className="nav-link py-3 border-bottom rounded-0" title="Products" data-bs-toggle="tooltip" data-bs-placement="right">
            <img src={Profile} width={40} alt="" />
            </button>
          </li> 
        </ul> 
      </div>
      {/* <ul>
        <button onClick={() => navigate("/search")}>Search</button>
        <button onClick={() => navigate("/contact-list")}>Contact List</button>
        <button onClick={() => navigate("/add-contact")}>Add Contact</button>
        <button onClick={() => navigate("/profile")}>Profile</button>
      </ul> */}
    </div>
  )
}

export default Sidebar