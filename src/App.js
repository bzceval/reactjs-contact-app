import "./App.scss";
import Home from "./pages/Home";
import Router from "./Router/Router";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card flex-row shadow">
        <Router />
      </div>
    </div>
  );
}

export default App;
