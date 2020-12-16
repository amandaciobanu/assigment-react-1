import React, {useState} from 'react'
import { login } from '../services/Auth'
import { Link, Redirect } from 'react-router-dom'

export default function LoginForm() {

  const [authUser, setAuthUser] = useState(null);
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
      setAuthUser(result);
    }
    else {
      setLoginError(true);
    }

    setRequesting(false);
  }

  if (authUser) {
    return <Redirect to='/' />;
  }

  return (
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email"
                 className="form-control"
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
              id="password"
              onChange={e => {
                setPassword(e.target.value);
              }}
          />
        </div>

        {loginError && <p style= color:"red">Login failed</p>}

        <button
            id='fetch-button'
            type="submit"
            disabled={username.length === 0 || password.length === 0 || requesting}
            className="btn btn-primary" onClick={performLogIn}
        >
          {requesting ? 'Logging in...' : 'Log in'}
        </button>
        <div>
          <Link to="/forgotPassword">Forgot your password?</Link>

        </div>
        <div>
          <Link to="/register">Don't have an account?</Link>

        </div>
      </form>
  )
}