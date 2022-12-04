import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider, forgotPassword } from "../utils/authFunctions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    console.log(email, password);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

  return (
    <div className="row col-12 p-5">
      <h6 className="text-center fs-2 display-1 my-4 text-decoration-underline">Login</h6> 
    
       <form onSubmit={handleLogin} className="auth-form shadow rounded p-4">

        <div className="mb-3 ">
          <label htmlFor="email" className="form-label mb-2"> Email address </label>
          <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control shadow-sm p-2" id="email" required />
        </div>

        <div className="mb-3 ">
          <label htmlFor="password" className="form-label mb-2"> Password </label>
          <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-sm p-2" id="password" required />
        </div>

        <div>
          <p className="forgat my-4" onClick={() => forgotPassword(email)}>Forgat Password ?</p>
          <button type="submit" className="btn btn-auth w-100 mb-2"> Login </button>
        </div>

      </form>  
    
      <div className="google-provider text-center p-3 my-2">
        <button onClick={handleProviderLogin} type="submit" className="btn btn-danger shadow mb-3 w-100" > Continue with Google </button>
      </div>
    </div>
  );
};

export default Login;
