// Write your code here
import React, {Component} from 'react'
import './index.css'
import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

class Home extends Component {
  state = {
    isLoggedIn: false,
  }

  toggleAuth = () => {
    this.setState(prevState => ({
      isLoggedIn: !prevState.isLoggedIn,
    }))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="home-container">
        <Message isLoggedIn={isLoggedIn} />
        {isLoggedIn ? (
          <Logout onLogout={this.toggleAuth} />
        ) : (
          <Login onLogin={this.toggleAuth} />
        )}
      </div>
    )
  }
}

export default Home
