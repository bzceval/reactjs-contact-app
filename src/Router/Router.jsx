import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import ContactList from '../pages/ContactList'
import ContactDetail from '../pages/ContactDetail'
import Search from '../pages/Search'
import Sidebar from '../components/Sidebar/Sidebar'

const Router = () => {
  return (
    <BrowserRouter>
    <Sidebar />
        <Routes>
            <Route index element={<Home />}/>
            <Route path='/contact-list' element={<ContactList/>} />
            <Route path='/detail:id' element={<ContactDetail/>} />
            <Route path="/search" element={<Search/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router