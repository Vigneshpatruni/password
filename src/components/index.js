import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'

class PasswordManager extends Component {
  state = {websiteName: '', userName: '', password: '', websitesList: []}

  changeWebsiteName = event => {
    this.setState({websiteName: event.target.value})
  }

  changeUserName = event => {
    this.setState({userName: event.target.value})
  }

  changePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmit = () => {
    const {websiteName, userName, password} = this.state
    const newList = {
      id: uuidv4(),
      websiteName,
      userName,
      password,
    }
    this.setState(prevState => ({
      websitesList: {...prevState.websitesList, newList},
    }))
  }

  addNewPassword = () => {
    const {userName, websiteName, password} = this.state
    return (
      <div>
        <h1>Add New Password</h1>
        <form className="form" onSubmit={this.onSubmit}>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              className="website"
              alt="website"
            />
            <input
              type="text"
              className="text"
              placeholder="Enter Website"
              onChange={this.changeWebsiteName}
              value={websiteName}
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
              className="website"
              alt="username"
            />
            <input
              type="text"
              className="text"
              placeholder="Enter Username"
              onChange={this.changeUserName}
              value={userName}
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              className="website"
              alt="password"
            />
            <input
              type="password"
              className="text"
              placeholder="Enter Password"
              onChange={this.changePassword}
              value={password}
            />
          </div>
          <button className="button" type="submit">
            Add
          </button>
        </form>
      </div>
    )
  }

  yourPasswords = () => {
    const {websitesList} = this.state
    return (
      <div>
        <div>
          <p>
            Your Passwords <button>{websitesList.length}</button>
          </p>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input type="search" onChange={this.onChnageSearchElement} />
          </div>
          {websitesList.map(eachItem => (
            <div key={eachItem.id}>
              <button>{eachItem.websiteName[0]}</button>
              <p>{eachItem.websiteName}</p>
              <p>{eachItem.userName}</p>
              <p>{eachItem.password}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>
          Password <br /> Manager
          <div>
            {this.addNewPassword()}
            {this.yourPasswords()}
          </div>
        </h1>
      </div>
    )
  }
}

export default PasswordManager
