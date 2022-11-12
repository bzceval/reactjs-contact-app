import "./App.scss";
import Home from "./pages/Home";
import Router from "./Router/Router";
import AuthContextProvider from './context/AuthContext';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
        <AuthContextProvider>
          <Router>
            <Home />
          </Router>
          </AuthContextProvider>
        </div>
      </div>
    </div>
  );
}

export default App;
