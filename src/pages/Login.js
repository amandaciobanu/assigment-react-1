import React from 'react'
import LoginForm from '../components/LoginForm'



export default function Login() {
  return (
      <main>
        <div className="container-fluid container-login">
          <div className="row">
            <div className="col">
            <LoginForm/>
            </div>
          </div>
        </div>
      </main>
  )
}