import "./App.scss";
import Home from "./pages/Home";
import Router from "./Router/Router";
import ContextProvider from "./context/ContextProvider";

function App() {
  return ( 
      <div className="container d-flex justify-content-center">
        <div className="card flex-row shadow">
          <ContextProvider>
            <Router>
              <Home />
            </Router>
          </ContextProvider>
        </div>
      </div> 
  );
}

export default App;
