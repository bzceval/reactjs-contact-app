import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn, signUpProvider } from "../utils/authFunctions";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  }
  return (
  <div className="container">
   <div className="form-auth w-100 shadow rounded my-3 mt-5">
    <form onSubmit={handleLogin}>
      <h6 className="text-center fs-2 display-1 my-4 pt-4 text-decoration-underline"> Login </h6>

      <div className="mb-3 pe-4 ps-4">
        <label htmlFor="email" className="form-label mb-2"> Email address </label>
        <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control shadow-sm" id="email" required />
      </div>

      <div className="mb-3 pe-4 ps-4">
        <label htmlFor="password" className="form-label mb-2"> Password </label>
        <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control shadow-sm" id="password" required />
      </div>

      <div className="pe-4 ps-4">
        <p>Forgat Password ?</p>
        <button type="submit" className="btn btn-login w-100 mb-3"> Login </button>
      </div>

    </form>
    <div className="google-provider text-center">
      <button onClick={handleProviderLogin} type="submit" className="btn btn-danger mb-3"> Continue with Google </button>
    </div>
  </div>
  </div>
  );
};

export default Login;
