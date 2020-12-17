import React, {useState} from "react";
import { requestPasswordReset } from "../services/Auth";
import {Link} from "react-router-dom";

export default function ForgotPassword() {

  const [email, setEmail] = useState('');
  const [requesting, setRequesting] = useState(false);
  const [requestSent, setRequestSent] = useState(false);

  const performPasswordRest = async (e) => {
    e.preventDefault();

    setRequesting(true);
    setRequestSent(false);

    await requestPasswordReset(email);

    setEmail('');
    setRequesting(false);
    setRequestSent(true);
  }

  return (
      <div className="container-fluid login-form">
        <div className="row login-form-row">
          <div className='col-12'>
            <h3>Email Verification</h3>
            <p>We will send a reset link to your registered email address.</p>
            <p>Please enter your email.</p>
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email"
                       className="form-control"
                       id="email"
                       aria-describedby="emailHelp"
                       value={email}
                       onChange={e => {
                         setEmail(e.target.value);
                       }}
                />

                {requestSent && <p>A request email was sent to you.</p>}

                <button
                    id='send-link'
                    disabled={email.length === 0 || requesting}
                    className="btn btn-lg btn-block btn-form"
                    onClick={performPasswordRest}
                >
                  {requesting ? 'Sending ...' : 'Reset'}

                </button>
                <small>
                  <Link className='link-navigation' to="/">Back to the Home Page</Link>
                </small>
              </div>
            </form>
          </div>

        </div>

      </div>
  )
}