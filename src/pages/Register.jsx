import React from 'react'

const Register = () => {
  return (
    <form className="form-auth w-100 shadow rounded my-4 pt-4 pb-4 p-4"> 
    <div className="mb-3">
      <label htmlFor="text" className="form-label mb-1">Username</label>
      <input type="text" className="form-control shadow-sm" id="text" aria-describedby="textHelp" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label mb-1">Email address</label>
      <input type="email" className="form-control shadow-sm" id="email" aria-describedby="emailHelp" required/>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label mb-1">Password</label>
      <input type="password" className="form-control shadow-sm" id="password" required/>
    </div>  
    <button type="submit" className="btn btn-login w-100 mb-4">Register</button>
    <button type="submit" className="btn btn-danger w-100 mb-3">Continue with Google</button>
  </form> 
  )
}

export default Register