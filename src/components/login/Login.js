import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import Signup from "../signup/Signup";
import Welcome from "../hello/Welcome";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      password: "",
    };
  }
  login = () => {
    console.log("hi", this.state.userName);
    this.props.history.push({
      pathname: "/Welcome",
      state: this.state.userName,
    });
  };
  change = (event) => {
    console.log("setstate");
    this.setState({
      userName: event.target.value,
      password: event.target.value,
    });
  };
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        <h1>Login Pag</h1>
        <div>
          <label>UserName</label>{" "}
          <input
            type="email"
            onChange={this.change}
            placeholder="UserName"
            name="email"
          ></input>
          <br></br>
          <label>Password</label>{" "}
          <input
            type="password"
            onChange={this.change}
            placeholder="Password"
            name="password"
          ></input>
          <br></br>
          <div style={{ display: "flex", marginLeft: "40%", marginTop: "2%" }}>
            <button onClick={this.login} name="login">
              Login
            </button>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            <br></br>
            <NavLink to="/Signup">Signup</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
