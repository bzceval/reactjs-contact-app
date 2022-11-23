
const Login = () => {   
  return (  
    <div className="container pe-5 ps-5"> 
        <form className="form-auth w-100 shadow rounded my-4 pt-4 pb-4 p-4"> 
        <h6 className="text-center fs-2 display-1 mb-4 mt-3 text-decoration-underline">Login</h6>
        <div className="mb-3 pe-4 ps-4">
          <label htmlFor="email" className="form-label mb-2">Email address</label>
          <input type="email" className="form-control shadow-sm" id="email" aria-describedby="emailHelp" required/>
        </div>
        <div className="mb-3 pe-4 ps-4">
          <label htmlFor="password" className="form-label mb-2">Password</label>
          <input type="password" className="form-control shadow-sm" id="password" required/>
        </div> 
        <div className="pe-4 ps-4">
        <p>Forgat Password ?</p>
        <button type="submit" className="btn btn-login w-100 mb-3">Login</button>
        <button type="submit" className="btn btn-danger w-100 mb-3">Continue with Google</button>
        </div>
      </form> 
    </div>  
  );
};

export default Login;
