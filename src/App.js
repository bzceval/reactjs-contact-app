import "./App.scss";
import Router from "./Router/Router";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card flex-row shadow">
        <Router />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
