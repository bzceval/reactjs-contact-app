import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ContactList from "../pages/ContactList";
import AddContact from "../pages/AddContact"; 
import Sidebar from "../components/Sidebar/Sidebar";
import Login from "../pages/Login";
import Register from "../pages/Register"; 
// import PrivateRouter from "./PrivateRouter";

const Router = () => {
  return (
    <BrowserRouter>
      <div className="container d-flex shadow ">
        <div className="col-3 leftCard">
          <Sidebar />
        </div>
        <div className="col-9 righCard">
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* <Route path="/add-contact" element={<PrivateRouter />}>
              <Route path="" element={<AddContact />} />
            </Route> */}
            <Route path="/add-contact" element={<AddContact />} />  
            <Route path="/contact-list" element={<ContactList />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Router;
