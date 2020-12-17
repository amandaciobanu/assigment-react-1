import React from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from "../context/auth";
import logo from "../images/fxlogo.svg"

export default function Navbar() {

  const {auth, setAuth} = useAuth();

  const performLogout=() =>{
    setAuth(null)
  }

  return (
      <nav className="navbar nav-fx">
        <div className='container-fluid'>
          <Link className='navbar-brand' to="/">
            <img
                alt=""
                src={logo}
                width="80"
                height="80"
            />{' '}
          </Link>
          <ul className="navbar-nav ml-auto">
            {
              !auth &&
              <li className="nav-item">
                <Link className="nav-link" to='/login'>Login</Link>
              </li>
            }
          <div className='nav-logged-in'>
            {
              auth &&
              <li className="nav-item user-name">
                Hello {``}
                {auth ? auth.firstName : ""}
              </li>
            }
            {
              auth &&
              <li className="nav-item">
                <button
                    type="submit"
                    className='btn btn-form'
                    onClick={performLogout}
                >
                  log out
                </button>
              </li>
            }
          </div>
          </ul>
        </div>

      </nav>
  )
}