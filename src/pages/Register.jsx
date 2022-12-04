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

    <div className="row col-12">
      <h6 className="text-center fs-2 display-1 my-4 pt-4 text-decoration-underline">Register</h6> 
    <div className="gap-3" >  
       <form onSubmit={handleRegister} className="p-4">

        <div className="mb-3 pe-4 ps-4">
           <label htmlFor="firstName" className='form-label'>First Name</label>
           <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control shadow-sm" id='firstName' required/>   
        </div>

        <div className="mb-3 pe-4 ps-4">
           <label htmlFor="lastName" className='form-label'>Last Name</label>
           <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control shadow-sm" id='lastName' required/>
        </div>

        <div className="mb-3 pe-4 ps-4">
            <label htmlFor="email" className="form-label mb-2"> Email address </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control shadow-sm" id="email" required />
        </div>

        <div className="mb-3 pe-4 ps-4">
            <label htmlFor="password" className="form-label mb-2"> Password </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-sm" id="password" required />
        </div>

        <div className="pe-4 ps-4">
          {/* <p onClick={() => forgotPassword(email)}>Forgat Password ?</p> */}
          <button type="submit" className="btn btn-login w-100 mb-2"> Register </button>
        </div>

      </form> 
    </div>  
    
      <div className="google-provider text-center">
        <button onClick={handleProviderLogin} type="submit" className="btn btn-danger mb-3" > Continue with Google </button>
      </div>
    </div>

  // <div className="row col-12">
  //   <h6 className="text-center fs-2 display-1 my-4 pt-4 text-decoration-underline">Register</h6> 
  //     <div className="gap-3" >  
  //       <form onSubmit={handleSubmit} className="p-4">

  //         <div className="mb-3 pe-4 ps-4">          
          //  <label htmlFor="firstName" className='form-label'>First Name</label>
          //  <input onChange={(e) => setFirstName(e.target.value)} type="text" className="form-control shadow-sm" id='firstName' required/>         
  //         </div>

  //         <div className="mb-3 pe-4 ps-4"> 
  //           <label htmlFor="lastName" className='form-label'>Last Name</label>
  //           <input onChange={(e) => setLastName(e.target.value)} type="text" className="form-control shadow-sm" id='lastName' required/>
  //         </div> 
 
  //         <div className="mb-3 pe-4 ps-4">
            // <label htmlFor="email" className="form-label mb-2"> Email address </label>
            // <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control shadow-sm" id="email" required />
  //         </div>
 
          // <div className="mb-3 pe-4 ps-4">
          //   <label htmlFor="password" className="form-label mb-2"> Password </label>
          //   <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-sm" id="password" required />
          // </div>
 
  //         <div className="pe-4 ps-4">
  //           <button type="submit" className="btn btn-login w-100 mb-3"> Register </button>
  //         </div>
  
  //         <div className="pe-4 ps-4">
  //           <p onClick={() => navigate("/login")}>Have a Account?</p>
  //           <div className="google-provider text-center">
  //             <button onClick={handleProviderLogin} type="submit" className="btn btn-danger mb-3" > Continue with Google </button>
  //           </div>
  //         </div>

  //       </form> 
  //     </div>   
  // </div>
  )
}

export default Register