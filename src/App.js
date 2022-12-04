import "./App.scss";
import Router from "./Router/Router";

function App() {
  return (
    <div className="d-flex justify-content-center">
      <div className="card flex-row shadow">
        <Router />
      </div>
    </div>
  );
}

export default App;
