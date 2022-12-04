import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {createUser, signUpProvider} from '../utils/authFunctions'

const Register = () => {
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault() 
    const displayName = `${firstName} ${lastName}`;
    console.log(firstName, lastName);
    createUser(email, password, navigate, displayName) 
  }

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  }

  return (

    <div className="row col-12 p-5">
      <h6 className="text-center fs-2 display-1 my-4 text-decoration-underline">Register</h6> 
     
       <form onSubmit={handleRegister} className="auth-form shadow rounded p-3">

        <div className="mb-3 pt-3 mx-3">
           <label htmlFor="firstName" className='form-label'>First Name</label>
           <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control shadow-sm p-2" id='firstName' required/>   
        </div>

        <div className="mb-3 pt-3 mx-3">
           <label htmlFor="lastName" className='form-label'>Last Name</label>
           <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control shadow-sm p-2" id='lastName' required/>
        </div>

        <div className="mb-3 pt-3 mx-3">
            <label htmlFor="email" className="form-label mb-2"> Email address </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control shadow-sm p-2" id="email" required />
        </div>

        <div className="mb-3 pt-3 mx-3">
            <label htmlFor="password" className="form-label mb-2"> Password </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-sm" id="password" required />
        </div>

        <div> 
          <button type="submit" className="btn btn-auth w-100 mb-2"> Register </button>
        </div>

      </form> 
    
      <div className="google-provider text-center p-3 my-2">
        <button onClick={handleProviderLogin} type="submit" className="btn shadow w-100 btn-danger mb-3" > Continue with Google </button>
      </div>
    </div> 
  )
}

export default Register