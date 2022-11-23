import React from 'react'
import './ContactForm.scss'

const ContactForm = ({info, setInfo, handleSubmit}) => {
// const {username, phoneNumber, gender} = info
// console.log(info)
const handleChange = (e) => {
  e.preventDefault()
  // const name = e.target.name
  // const value= e.target.value
  const {name, value} = e.target;
  console.log(name, value)
  setInfo({...info, [name]:value})
}
  return (
    <form onSubmit={handleSubmit} className="contact-form w-100 shadow rounded my-4 pt-4 pb-4 p-4">
        <div className="mb-3 pe-5 ps-5">
          <label htmlFor="username" className="form-label mb-1">Fullname</label>
          <input onChange={handleChange} name="username" value={info.username} type="text" className="form-control" id="username" /> 
        </div>
        <div className="mb-3 pe-5 ps-5">
          <label htmlFor="phoneNumber" className="form-label mb-1">Phone Number</label>
          <input onChange={handleChange} name="phoneNumber" value={info.phoneNumber} type="text" className="form-control" id="phoneNumber" /> 
        </div>
       <div className="mb-3 pe-5 ps-5">
          <label htmlFor="gender" className="form-label mb-1">Gender</label>
          <select onChange={handleChange} name="gender" value={info.gender} id='gender' className="form-select" aria-label="Please select gender" >
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="other">Other</option> 
          </select>
        </div>
        <div className="mb-3 d-grid mt-4 pe-5 ps-5">
        <button type="submit" className="btn btn-primary"> Add Contact </button>
        </div>
    </form>
  )
}

export default ContactForm