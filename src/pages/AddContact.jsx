import React, {useState} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
import {AddUser} from '../utils/firebaseFunctions'

const initialValues = {username:"", phoneNumber:"", gender:""}

const AddContact = () => {
const [info, setInfo] = useState(initialValues) 

const handleSubmit = (e) => {
  e.preventDefault()
  AddUser(info)
  setInfo(initialValues);
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