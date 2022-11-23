import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactList from "../pages/ContactList";
import AddContact from "../pages/AddContact";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Router = () => {
  return (
    <BrowserRouter> 
        <div class="container Router row">
          <div class="col-md-4">
            <Sidebar />
          </div>
          <div class="col-md-8 bg-light">
            <div className="main-container">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Route>
              <Route path="/contact-list" element={<ContactList />} />
              <Route path="/add-contact" element={<AddContact />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            </div>
          </div>
        </div> 
    </BrowserRouter>
  );
};

export default Router;
