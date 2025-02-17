import {Component} from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    userName: '',
    password: '',
    showPassword: false,
    showLoginError: false,
    errorMsg: '',
  }

  onChangeUserName = event => {
    this.setState({
      userName: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  renderUserNameField = () => {
    const {userName} = this.state
    return (
      <>
        <label htmlFor="userName">USERNAME</label>
        <br />
        <input
          type="text"
          value={userName}
          id="userName"
          onChange={this.onChangeUserName}
        />
        <br />
      </>
    )
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password">PASSWORD</label>
        <br />
        <input
          type="password"
          value={password}
          id="password"
          onChange={this.onChangePassword}
        />
        <br />
      </>
    )
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({
      showLoginError: true,
      errorMsg,
    })
  }

  submitForm = async event => {
    event.preventDefault()
    const {userName, password} = this.state
    const userDetails = {
      username: userName,
      password,
    }
    const loginUrl = `https://apis.ccbp.in/login`
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(loginUrl, options)

    const data = await response.json()
    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
    //  console.log(data)
  }

  render() {
    const {showPassword, showLoginError, errorMsg} = this.state
    return (
      <div className="login-container">
        <form className="login-form-container" onSubmit={this.submitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />
          {this.renderUserNameField()}
          {this.renderPasswordField()}
          <div>
            <input type="checkbox" checked={showPassword} id="showPassword" />
            <label htmlFor="showPassword">Show Password</label>
          </div>
          <button type="submit">Login</button>
          {showLoginError && <p className="error-msg">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default Login
