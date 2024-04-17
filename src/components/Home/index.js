import './index.css'

import {Component} from 'react'

import Login from '/home/nxtwave/reactjs/coding-practices/loginApp/src/components/Login'

import Message from '/home/nxtwave/reactjs/coding-practices/loginApp/src/components/Message'

import Logout from '/home/nxtwave/reactjs/coding-practices/loginApp/src/components/Logout'

class Home extends Component {
  state = {login: true}
  clickBtn = () => {
    this.setState(prevState => {
      return {login: !prevState.login}
    })
  }
  render() {
    const {login} = this.state
    const c = this.clickBtn
    return (
      <div className="bgContainer">
        <div className="card element">
          <Message msg={!login ? 'Welcome User' : 'Please Login'} />
          {login ? <Login onclick={c} /> : <Logout onclick={c} />}
        </div>
      </div>
    )
  }
}
export default Home
