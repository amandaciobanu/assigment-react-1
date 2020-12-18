import React, {useState} from "react";
import {register} from '../services/Auth'
import { Link, Route } from "react-router-dom";
import { useAuth } from "../context/auth";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Register(){

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const { auth, setAuth } = useAuth();

  const validForm = () =>{
    return userFirstName.length > 0
        && userLastName.length > 0
        && userEmail.length > 0
        && password1.length > 7
        && password2.length > 7
        && password1 === password2;
  }

  const performRegister = async (e) => {
    e.preventDefault();

    setRequesting(true);
    const result = await register(userFirstName, userLastName, userEmail, password1);
    if (result) {
      setAuth(result);
    }
    else {
      setRegisterError(true);
    }

    setRequesting(false);
  }

  if (auth){
    return <Route path="/"/>;
  }

  return(
      <div className="container-fluid login-form">
        <div className="row login-form-row">
          <div className='col-12'>
            <span className='icon-animation'><FontAwesomeIcon id='basketball' className="basketball-icon" icon="basketball-ball" /></span>
            <h3>New Here?</h3>
            <p>Enter your details to get started</p>
            <form>
              <div className="form-group">
                <label>First name</label>
                <input type="text"
                       className="form-control"
                       placeholder="First name"
                       onChange={e => {
                         setUserFirstName(e.target.value);
                       }}
                />
              </div>

              <div className="form-group">
                <label>Last name</label>
                <input type="text"
                       className="form-control"
                       placeholder="Last name"
                       onChange={e => {
                         setUserLastName(e.target.value);
                       }}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email"
                       className="form-control"
                       placeholder="Enter email"
                       onChange={e => {
                         setUserEmail(e.target.value);
                       }}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password"
                       className="form-control"
                       placeholder="Enter password"
                       onChange={e => {
                         setPassword1(e.target.value);
                       }}
                />
                <small id="passwordHelpBlock" className="form-text text-muted">
                  Your password must be 8-20 characters long.
                </small>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input type="password"
                       className="form-control"
                       placeholder="Enter password"
                       onChange={e => {
                         setPassword2(e.target.value);
                       }}
                />
              </div>

              {/*Register error message*/}
              {registerError && <p><small className='error-message'>There was a problem signing you in. Please, check your information</small></p>}

              <button type="submit"
                      className="btn btn-lg btn-block btn-form"
                      disabled={!validForm() || requesting}
                      onClick={performRegister}
              >
                Register
              </button>
              <p>
                Already registered? {``}
              </p>
              <p>
                <Link className='link-navigation' to="/login">Login Here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
  )
}