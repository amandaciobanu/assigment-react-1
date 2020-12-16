import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from "../context/auth";

export default function Navbar() {

  const {auth} = useAuth();

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mr-auto" id="navbarNav">
          <ul className="navbar-nav">
            {
              !auth &&
              <li className="nav-item active">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
            }
            <li className="nav-item disabled">
              {auth ? auth.email : "Not Logged In"}
            </li>
          </ul>
        </div>
      </nav>
  )
}