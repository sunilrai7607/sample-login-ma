import React, { Component } from "react";
import "../styles/login.css";
import UserService from "../apiservice/UserService";

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.userInputText = null;
  }

  componentDidMount() {
    this.userInputText.focus();
  }

  handleOnSubmit = async (event) => {
    event.preventDefault();
    console.log("Submit the loginForm data ", this.userInputText.value);
    const response = await UserService.get(
      this.userInputText,
      this.passwordInputText
    );
    console.log("Response : ", response);
  };

  handleKeyUp = (target, event) => {
    event.preventDefault();
    console.log("handleKeyUp data ", event.keyCode);
    if (event.keyCode === 13) {
      switch (target) {
        case "userId":
          this.passwordInputText.focus();
          break;
        case "password":
          this.submitButton.focus();
          break;
        default:
          this.userInputText.focus();
          break;
      }
    }
  };

  render() {
    return (
      <>
        <div className="container login-container">
          <div className="row">
            <div className="col-md-6 login-form-1">
              <h3>Employee Login</h3>
              <form onSubmit={this.handleOnSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your UserId *"
                    name="userId"
                    ref={(elem) => {
                      this.userInputText = elem;
                    }}
                    onKeyUp={this.handleKeyUp.bind(this, "userId")}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Your Password *"
                    name="password"
                    ref={(elem) => {
                      this.passwordInputText = elem;
                    }}
                    onKeyUp={this.handleKeyUp.bind(this, "password")}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btnSubmit"
                    value="Login"
                    name="submitButton"
                    ref={(elem) => {
                      this.submitButton = elem;
                    }}
                  />
                </div>
                <div className="form-group">
                  <a href="#" className="ForgetPwd">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LoginComponent;
