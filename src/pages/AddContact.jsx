import React, {useState} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
const initialValues = {username:"", phoneNumber:"", gender:""}

const AddContact = () => {
const [info, setInfo] = useState(initialValues)   

  return (
    <div className="add-contact-container p-5">
      <div className="container">
        <h1>Add Contact</h1>
        <ContactForm info={info} setInfo={setInfo} />
      </div>
    </div>
  );
};

export default AddContact;