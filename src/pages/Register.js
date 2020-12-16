import React, {useState} from "react";
import {register} from '../services/Auth'
import { Link, Redirect } from 'react-router-dom'


export default function Register(){

  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [registerError, setRegisterError] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const validForm = () =>{
    if (userFirstName.length > 0
        && userLastName.length > 0
        && userEmail.length > 0
        && password1.length > 5
        && password2.length > 5
        && password1 === password2
    ){
      return true
    }
  }

  const performRegister = async (e) => {
    e.preventDefault();

    setRequesting(true);
    const result = await register(userFirstName, userLastName, userEmail, password1);
    if (result) {
      setRegisterSuccess(true);
    }
    else {
      setRegisterError(true);
    }

    setRequesting(false);
  }

  if (registerSuccess){
    return <Redirect to='/' />;
  }

  return(
      <div className='container-fluid'>
        <div className="row">
          <div className="col">
            <form>
              <h3>Register</h3>

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
                  Your password must be 5-20 characters long.
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

              {registerError && <p>Register failed</p>}

              <button type="submit"
                      className="btn btn-dark btn-lg btn-block"
                      disabled={!validForm() || requesting}
                      onClick={performRegister}

              >Register
              </button>
              <div className="text-right">
                <Link to="/login">Already registered? Login here</Link>

                </div>
            </form>
          </div>
        </div>
      </div>
  )
}