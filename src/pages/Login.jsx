
const Login = () => {   
  return (   
        <form className="form-auth w-100 shadow rounded my-4 pt-4 pb-4 p-4"> 
        <div className="mb-3">
          <label htmlFor="email" className="form-label mb-1">Email address</label>
          <input type="email" className="form-control shadow-sm" id="email" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label mb-1">Password</label>
          <input type="password" className="form-control shadow-sm" id="password" required/>
        </div> 
        <p>Forgat Password ?</p>
        <button type="submit" className="btn btn-login w-100 mb-3">Login</button>
        <button type="submit" className="btn btn-danger w-100 mb-3">Continue with Google</button>
      </form> 
  );
};

export default Login;
