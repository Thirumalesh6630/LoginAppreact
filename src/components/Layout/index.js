// Write your code here
import React from 'react'
import './index.css'

const Logout = ({onLogout}) => (
  <button className="auth-button" onClick={onLogout}>
    Logout
  </button>
)

export default Logout
