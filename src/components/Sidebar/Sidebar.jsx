import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.scss";
import AddContact from "../../assets/add-contact.png";
import ContactList from "../../assets/contact-list.png"; 
import Home from "../../assets/home.png";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className="d-flex flex-column text-center">
        <ul className="nav nav-pills nav-flush flex-column">
          <li
            onClick={() => navigate("/")}
            className="d-flex justify-content-center my-4"
          >
            <button className="nav-link">
              <img src={Home} width={30} alt="contact list" />
              <p>Home</p>
            </button>
          </li>

          <li
            onClick={() => navigate("/contact-list")}
            className="d-flex justify-content-center my-4"
          >
            <button className="nav-link">
              <img src={ContactList} width={30} alt="contact list" />
              <p>Contact List</p>
            </button>
          </li>

          <li
            onClick={() => navigate("/add-contact")}
            className="d-flex justify-content-center my-4"
          >
            <button className="nav-link">
              <img src={AddContact} width={30} alt="add contact" />
              <p>Add Contact</p>
            </button>
          </li>  
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
