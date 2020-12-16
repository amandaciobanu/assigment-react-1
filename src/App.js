import React, {useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

// Import Pages
import Register from "./pages/Register";
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';
import ForgotPassword from "./pages/ForgotPassword";

// Global Service
import {AuthContext} from "./context/auth";

//Font Awesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {fab} from '@fortawesome/free-brands-svg-icons'
import {faBasketballBall} from '@fortawesome/free-solid-svg-icons'

// Import Components
import Navbar from "./components/Navbar";

library.add(fab, faBasketballBall)

function App() {
  const storedAuth = JSON.parse(localStorage.getItem('auth'));
  const [auth, setAuth] = useState(storedAuth);

  const setAuthLocalStorage = (v) => {
    if (v) {
      localStorage.setItem('auth', JSON.stringify(v));
    } else {
      localStorage.removeItem('auth')
    }

    setAuth(v);
  }

  return (
      <AuthContext.Provider value={{auth, setAuth: setAuthLocalStorage}}>
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