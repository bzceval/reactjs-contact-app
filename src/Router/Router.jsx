import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ContactList from '../pages/ContactList'
import AddContact from '../pages/AddContact' 
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Sidebar from '../components/Sidebar/Sidebar'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Router = () => {
  return (
    <div className="router">
    <BrowserRouter>
    <Sidebar />
        <Routes>
            <Route path='/'  element={<Home />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>            
            <Route path='/contact-list' element={<ContactList/>} />
            <Route path='/add-contact' element={<AddContact />} /> 
            <Route path="/search" element={<Search/>} />
            <Route path="/profile" element={<Profile/>} />
            
        </Routes>

    </BrowserRouter>
    </div>
  )
}

export default Router