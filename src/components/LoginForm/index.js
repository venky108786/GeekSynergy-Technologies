import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    para: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  submitForm = event => {
    const {username, password} = this.state
    event.preventDefault()

    const name = localStorage.getItem('username')
    const getPassword = localStorage.getItem('password')
    if (username === name && password === getPassword) {
      window.location.assign('https://hoblist.com/api/movieList')
    } else {
      this.setState({errorMsg: 'Please Enter valid Data'})
    }
  }

  imgClick = () => {
    this.setState({
      para:
        'Company:-Geeksynergy Technologies Pvt Ltd,Address:-Sanjayanagar,Bengaluru-56,Phone:-XXXXXXXXX09,Email:-XXXXXX@gmail.com',
    })
  }

  render() {
    const {errorMsg, para} = this.state
    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="logo-constain">
            <button
              type="button"
              className="img-button"
              onClick={this.imgClick}
            >
              <img
                src="https://res.cloudinary.com/dvdfoq1j9/image/upload/v1666123831/geeksynergy-technologies-pvt-ltd-sanjay-nagar-bangalore-it-solution-providers-qzsgim75kr-250_b9ivbb.webp"
                className="small-logo"
                alt="website logo"
              />
            </button>
            <button type="button" className="button">
              <Link to="/" className="signUpLink">
                SignUp
              </Link>
            </button>
          </div>
          <p>{para}</p>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          <p className="error-message">{errorMsg}</p>
        </form>
      </div>
    )
  }
}

export default LoginForm
