import React, {useState} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
// const initialValues = {username:"", phoneNumber:"", gender:""}
import {AddUser} from '../utils/firebaseFunctions'

const AddContact = () => {
const [info, setInfo] = useState({username:"", phoneNumber:"", gender:""}) 

const handleSubmit = (e) => {
  e.preventDefault()
  AddUser(info)
}

  return (
    <div className="add-contact-container p-5">
      <div className="container">
        <h2 className="text-start border-bottom">Add Contact</h2>
        <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default AddContact;