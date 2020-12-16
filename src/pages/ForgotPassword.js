import React, {useState} from "react";
import { requestPasswordReset } from "../services/Auth";

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
      <div className='container-fluid'>
        <div className='row'>
          <div className="col">
            <p>EMAIL VERIFICATION</p>
            <p>We will send a reset link to your email address. Please enter your email address</p>
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
                    className="btn btn-primary"
                    onClick={performPasswordRest}
                >
                  {requesting ? 'Sending ...' : 'Reset'}

                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
  )
}