import React, { Component } from "react";

class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  handleInputChange = ({ currentTarget: input }) => {
    const account = { ...this.state.account };
    account[input.name] = input.value;
    this.setState({
      account,
    });
  };

  render() {
    const { username, password } = this.state.account;

    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              autoFocus
              value={username}
              onChange={this.handleInputChange}
              name="username"
              type="text"
              className="form-control"
              id="username"
              aria-describedby="usernamehelp"
            />
            <div id="usernamehelp" className="form-text">
              We'll never share your username with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
