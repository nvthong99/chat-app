import Sidebar from "./component/sidebar/Sidebar";
import "./style.css";
import React from "react";
import Login from "./component/login/Login";

class App extends React.Component {
  state = {
    isAuth: true,
  };
  auth = (token) => {
    console.log(token);
    this.setState({ isAuth: true });
  };
  render() {
    return (
      <div className="App">
        {this.state.isAuth ? (
          <div className="container-fluid">
            <div className="row no-gutters">
              <Sidebar />
            </div>
          </div>
        ) : (
          <Login handleSingIn={this.auth} />
        )}
      </div>
    );
  }
}

export default App;
