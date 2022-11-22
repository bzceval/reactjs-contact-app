
const Login = () => {   
  return (  
    <main className="form-signin w-100 m-auto bg-light">
        <form>
          <h5 className="mb-3 fw-normal">Please sign up</h5> 
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder='Email address' required/>
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder='Password' required/>
            <label htmlFor="floatingPassword">Password</label>
          </div> 
          <p className="mb-3 text-muted">Forgat Password?</p>
          <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
      </main>
  );
};

export default Login;
