import React, {useState} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
 

const AddContact = () => {
   

  return (
    <div className="add-contact-container p-5">
      <div className="container">
        <h1>Add Contact</h1>
        <ContactForm  />
      </div>
    </div>
  );
};

export default AddContact;