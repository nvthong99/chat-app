import React from "react";
import log from "../../log.svg";
import register from "../../register.svg";
import { login, getUser } from "../../api/userApi";
class Login extends React.Component {
  constructor(props) {
    super(props);

    let token = localStorage.getItem("token");
    if (token) {
      let user = getUser(token);
      if (user) this.props.handleSingIn(" token");
    }
  }

  componentDidMount() {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });
  }
  state = {
    user: {
      username: "",
      password: "",
    },
  };
  onInputChangePassword = (e) => {
    this.setState({
      user: {
        password: e.target.value,
        username: this.state.user.username,
      },
    });
  };
  onInputChangeUsername = (e) => {
    this.setState({
      user: {
        username: e.target.value,
        password: this.state.user.password,
      },
    });
  };
  signIn = async () => {
    let isauth = await login(this.state.user);
    if (isauth) this.props.handleSingIn(" token");
  };
  render() {
    return (
      <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Sign in</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.user.username}
                  onChange={this.onInputChangeUsername}
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.user.password}
                  onChange={this.onInputChangePassword}
                />
              </div>
              <input
                type="submit"
                value="Login"
                className="btn solid"
                onClick={async () => await this.signIn()}
              />
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Sign up</h2>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>

              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Sign up" />
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button className="btn transparent" id="sign-up-btn">
                Sign up
              </button>
            </div>
            <img src={log} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button className="btn transparent" id="sign-in-btn">
                Sign in
              </button>
            </div>
            <img src={register} className="image" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
