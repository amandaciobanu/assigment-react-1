import React, {useState} from 'react'
import { login } from '../services/Auth'
import { Link, Redirect } from 'react-router-dom'
import { useAuth } from "../context/auth";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function LoginForm() {

  const { auth, setAuth } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [loginError, setLoginError] = useState(false);

  const performLogIn = async (e) => {
    e.preventDefault();

    setRequesting(true);
    const result = await login(username, password);
    if (result) {
      setLoginError(false);
      setAuth(result);
    }
    else {
      setLoginError(true);
    }

    setRequesting(false);
  }

  if (auth) {
    return <Redirect to='/' />;
  }

  return (
      <div className="container-fluid login-form">
        <div className="row login-form-row">
          <div className='col-12'>
            <span className='icon-animation'><FontAwesomeIcon id='basketball' className="basketball-icon" icon="basketball-ball" /></span>
            <h3>Welcome Back</h3>
            <p>Please, login to your account</p>
            <form>
              <div className="form-group">
                <label htmlFor="InputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       placeholder="Your Email"
                       id="email"
                       aria-describedby="emailHelp"
                       onChange={e => {
                         setUsername(e.target.value);
                       }}
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                  else.</small>
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password"
                    id="password"
                    onChange={e => {
                      setPassword(e.target.value);
                    }}
                />
              </div>

              {loginError && <p>Login failed</p>}

              <button
                  type="submit"
                  disabled={username.length === 0 || password.length === 0 || requesting}
                  className="btn btn-lg btn-block btn-form"
                  onClick={performLogIn}
              >
                {requesting ? 'Logging in...' : 'Login'}
              </button>
              <div>
                <Link to="/forgotPassword">Forgot your password?</Link>

              </div>
              <div>
                <Link to="/register">Don't have an account?</Link>

              </div>
            </form>
          </div>
        </div>
      </div>

  )
}