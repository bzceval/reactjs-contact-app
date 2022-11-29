import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {createUser} from '../utils/authFunctions'

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault() 
    const displayName = `${firstName} ${lastName}`;
    createUser(email, password, navigate, displayName) 
  }

  return (
    <div className="container pe-5 ps-5">
    <form onSubmit={handleSubmit} className="form-auth w-100 shadow rounded my-4 pt-4 pb-4 p-4"> 
    <h6 className="text-center fs-2 display-1 mb-4 mt-3 text-decoration-underline">Register</h6>
    <div className="mb-3">          
      <label htmlFor="firstName" className='form-label'>First Name</label>
      <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control" id='firstName' placeholder='Enter Your First Name' required/>
    </div>

    <div className="mb-3"> 
      <label htmlFor="lastName" className='form-label'>Last Name</label>
      <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control" id='lastName' placeholder='Enter Your Last Name' required/>
    </div>
    <div className="mb-3"> 
      <label htmlFor="email" className='form-label'>Email</label>
      <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id='email' placeholder='Enter Your Email' required/>
    </div>

    <div className="mb-3"> 
      <label htmlFor="password" className='form-label'>Password</label>
      <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id='password' placeholder='Enter Your Password' required/>
    </div> 

      <div className="pe-4 ps-4">
      <button type="submit" className="btn btn-login w-100 mb-3">Register</button>
    </div>
    </form> 
    <button type="submit" className="btn btn-danger w-100 mb-3">Continue with Google</button>
  </div>
  )
}

export default Register