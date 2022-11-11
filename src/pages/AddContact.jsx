import React, {useState} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
 

const AddContact = () => {
   

  return (
    <div className="add-contact-container">
      <div className="container">
        <ContactForm  />
      </div>
    </div>
  );
};

export default AddContact;