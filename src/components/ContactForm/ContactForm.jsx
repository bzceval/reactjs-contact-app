import React from 'react'
import './ContactForm.scss'

const ContactForm = () => {

  return (
    <form className="mt-5 contact-form">
        <div className="mb-3">
          <label htmlFor="text" className="form-label">Fullname</label>
          <input type="text" className="form-control" id="text" /> 
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone Number</label>
          <input type="text" className="form-control" id="phone" /> 
        </div>
       <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select className="form-select" aria-label="Please select gender" >
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option> 
          </select>
        </div>
        <div className="mb-3 d-grid mt-4">
        <button type="submit" className="btn btn-primary"> Add Contact </button>
        </div>
    </form>
  )
}

export default ContactForm