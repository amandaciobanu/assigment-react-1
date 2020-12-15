import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import pages
import Register from "./pages/Register";
import Login from './pages/Login';
import Error from './pages/Error';
import Home from './pages/Home';


// import components
import Navbar from "./components/Navbar";


function App() {
  return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;