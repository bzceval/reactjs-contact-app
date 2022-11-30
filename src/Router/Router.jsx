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
import HomePage from "../pages/HomePage";
import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="card shadow ">
        <div className="col-md-4 leftCard">
          <Sidebar />
        </div>
        <div className="col righCard">
          <Routes>
            <Route path="/" element={<Home />}>
              <Route path="" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/add-contact" element={ <PrivateRouter/> }>
              <Route path="" element={<AddContact />} />
            </Route>
            <Route path="/contact-list" element={<ContactList />} />
            <Route path="/search" element={<Search />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
