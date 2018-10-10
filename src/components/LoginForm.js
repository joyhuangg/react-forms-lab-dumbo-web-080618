import React from "react";

class LoginForm extends React.Component {
  // prop: onSubmit
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username && this.state.password) {
          this.props.onSubmit(this.state)
    }
  }

  handleOnChange = (event) => {
    if (event.target.name === "username"){
      this.setState({username: event.target.value})
    }
    else if (event.target.name === "password"){
      this.setState({password: event.target.value})
    }

  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(e) => this.handleOnChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(e) => this.handleOnChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
