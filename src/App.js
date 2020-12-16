import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
// import pages
import Register from "./pages/Register";
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import ForgotPassword from "./pages/ForgotPassword";
import {AuthContext} from "./context/auth";

// import components
import Navbar from "./components/Navbar";

function App() {
  const [auth, setAuth] = useState(null);

  return (
      <AuthContext.Provider value={{auth, setAuth}}>
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/register">
              <Register/>
            </Route>
            <Route path="/forgotPassword">
              <ForgotPassword/>
            </Route>
            <Route path="*">
              <Error/>
            </Route>
          </Switch>
        </Router>
      </AuthContext.Provider>
  );
}

export default App;