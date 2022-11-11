import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ContactList from '../pages/ContactList'
import AddContact from '../pages/AddContact'
import ContactDetail from '../pages/ContactDetail'
import Profile from '../pages/Profile'
import Search from '../pages/Search'
import Sidebar from '../components/Sidebar/Sidebar'

const Router = () => {
  return (
    <div className="router">
    <BrowserRouter>
    <Sidebar />
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/contact-list' element={<ContactList/>} />
            <Route path='/add-contact' element={<AddContact />} />
            <Route path='/detail:id' element={<ContactDetail/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/profile" element={<Profile/>} />
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Router