import React, {useContext} from "react";
import ContactForm from '../components/ContactForm/ContactForm'
import {AddUser} from '../utils/firebaseFunctions'
import { InfoContext } from '../context/ContextProvider'

// const initialValues = {username:"", phoneNumber:"", gender:""}

const AddContact = () => { 
const { info, setInfo } = useContext(InfoContext);

const handleSubmit = (e) => {
  e.preventDefault()
  AddUser(info)
  setInfo({username:"", phoneNumber:"", gender:""});
}

  return ( 
      <div className="container"> 
        <ContactForm info={info} setInfo={setInfo} handleSubmit={handleSubmit} />
      </div> 
  );
};

export default AddContact;