import "./App.scss";
import Home from "./pages/Home";
import Router from "./Router/Router";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card d-flex flex-row align-item-center w-75">
          <ContextProvider>
            <Router>
              <Home />
            </Router>
          </ContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
