import './index.css'
import {Component} from 'react'
import {Link} from 'react-router-dom'

class SinUp extends Component {
  state = {
    username: '',
    password: '',
    // eslint-disable-next-line react/no-unused-state
    showSubmitError: false,
    errorMsgStyle: false,
    errorMsg: '',
    email: '',
    number: '',
    profession: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeEmail = event => {
    this.setState({email: event.target.value})
  }

  onChangeNumber = event => {
    this.setState({number: event.target.value})
  }

  onChangeProfession = event => {
    this.setState({profession: event.target.value})
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

  renderEmailField = () => {
    const {email} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          Email@
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={email}
          onChange={this.onChangeEmail}
          placeholder="Email@"
        />
      </>
    )
  }

  renderNumberField = () => {
    const {number} = this.state

    return (
      <>
        <label className="input-label" htmlFor="number">
          Ph.No
        </label>
        <input
          type="text"
          id="number"
          className="username-input-field"
          value={number}
          onChange={this.onChangeNumber}
          placeholder="Ph.No"
        />
      </>
    )
  }

  renderProfessionField = () => {
    const {profession} = this.state
    return (
      <>
        <label htmlFor="profession">Profession</label>
        <select
          value={profession}
          id="profession"
          onChange={this.onChangeProfession}
          className="profession"
        >
          <option value="Student">Student</option>
          <option value="Employee">Employee</option>
          <option value="Worker">worker</option>
        </select>
      </>
    )
  }

  submitForm = event => {
    event.preventDefault()
    const {username, password, email, number, profession} = this.state
    localStorage.setItem('username', username)
    localStorage.setItem('password', password)
    localStorage.setItem('email', email)
    localStorage.setItem('number', number)
    localStorage.setItem('profession', profession)
    if (
      username !== '' &&
      password !== '' &&
      email !== '' &&
      number !== '' &&
      profession !== ''
    ) {
      this.setState({errorMsg: 'Successfully SingUp', errorMsgStyle: true})
    } else {
      this.setState({
        errorMsg: 'Please Enter valid information',
        errorMsgStyle: false,
      })
    }
  }

  render() {
    const {errorMsg, errorMsgStyle} = this.state
    return (
      <>
        <div className="login-form-container">
          <form className="form-container" onSubmit={this.submitForm}>
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dvdfoq1j9/image/upload/v1666123831/geeksynergy-technologies-pvt-ltd-sanjay-nagar-bangalore-it-solution-providers-qzsgim75kr-250_b9ivbb.webp"
                alt="logo"
                className="logo"
              />
              <h1 className="head">GeekSynergy Technologies</h1>
            </div>
            <div className="input-container">{this.renderUsernameField()}</div>
            <div className="input-container">{this.renderPasswordField()}</div>
            <div className="input-container">{this.renderEmailField()}</div>
            <div className="input-container">{this.renderNumberField()}</div>
            <div className="input-container">
              {this.renderProfessionField()}
            </div>

            <button type="submit" className="login-button">
              SignUp
            </button>

            <button type="submit" className="login-button">
              <Link to="/login" class="link">
                Login
              </Link>
            </button>

            <p className={errorMsgStyle ? 'success' : 'error-message'}>
              {errorMsg}
            </p>
          </form>
        </div>
      </>
    )
  }
}
export default SinUp
