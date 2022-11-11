import "./App.css";
import Home from "./pages/Home";
import Router from "./Router/Router";

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="card">
      <Router>
        <Home />
      </Router>
      </div>
      </div>
    </div>
  );
}

export default App;
