import React from "react";
import avatarDefault from "../../avatarDefault.png";
class UserInfo extends React.Component {
  render() {
    return (
      <div className="user-info settings-tray">
        <div className="name">
          <img
            className="profile-image"
            src={this.props.user.avatar || avatarDefault}
            alt="Profile img"
          />
          <h6>{this.props.user.name}</h6>
        </div>
        <span className="settings-tray--right">
          <i className="material-icons">info</i>
        </span>
      </div>
    );
  }
}

export default UserInfo;
