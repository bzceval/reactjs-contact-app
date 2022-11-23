import "./App.scss";
import Home from "./pages/Home";

function App() {
  return (
    <div className="container d-flex justify-content-center">
      <div className="card flex-row shadow bg-dark">
        <Home />
      </div>
    </div>
  );
}

export default App;
