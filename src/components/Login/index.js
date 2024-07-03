// Write your code here
import React from 'react'
import './index.css'

const Login = ({onLogin}) => (
  <button className="auth-button" onClick={onLogin}>
    Login
  </button>
)

export default Login
