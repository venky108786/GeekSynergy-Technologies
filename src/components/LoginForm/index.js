import {Component} from 'react'
import {Link} from 'react-router-dom'
// import Cookies from 'js-cookie'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    //     showSubmitError: false,
    //     errorMsg: '',
    //     email: '',
    //     number: '',
    //     profession: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  //   onChangeEmail = event => {
  //     this.setState({email: event.target.value})
  //   }

  //   onChangeNumber = event => {
  //     this.setState({number: event.target.value})
  //   }

  //   onChangeProfession = event => {
  //     this.setState({profession: event.target.value})
  //   }

  //   onSubmitSuccess = jwtToken => {
  //     // eslint-disable-next-line no-unused-vars
  //     const {history} = this.props

  //     Cookies.set('jwt_token', jwtToken, {
  //       expires: 30,
  //     })
  //     window.location.assign('https://hoblist.com/api/movieList')
  //   }

  //   onSubmitFailure = errorMsg => {
  //     this.setState({showSubmitError: true, errorMsg})
  //   }

  //   submitForm = async event => {
  //     event.preventDefault()
  //     const {username, password} = this.state
  //     const userDetails = {username, password}
  //     const url = 'https://apis.ccbp.in/login'
  //     const options = {
  //       method: 'POST',
  //       body: JSON.stringify(userDetails),
  //     }
  //     const response = await fetch(url, options)
  //     const data = await response.json()

  //     if (response.ok === true) {
  //       this.onSubmitSuccess(data.jwt_token)
  //     } else {
  //       this.onSubmitFailure(data.error_msg)
  //     }
  //   }

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

  render() {
    const {errorMsg} = this.state
    //     const jwtToken = Cookies.get('jwt_token')
    //     const {history} = this.props
    //     if (jwtToken !== undefined) {
    //       return <Redirect to="/" />
    //     }
    //     history.replace('/')

    return (
      <div className="login-form-container">
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="logo-constain">
            <img
              src="https://res.cloudinary.com/dvdfoq1j9/image/upload/v1666123831/geeksynergy-technologies-pvt-ltd-sanjay-nagar-bangalore-it-solution-providers-qzsgim75kr-250_b9ivbb.webp"
              className="small-logo"
              alt="website logo"
            />
            <button type="button" className="button">
              <Link to="/" className="signUpLink">
                SignUp
              </Link>
            </button>
          </div>
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
