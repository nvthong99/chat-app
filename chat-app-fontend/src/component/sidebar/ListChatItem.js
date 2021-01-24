import React from "react";

class ListChatItem extends React.Component {
  render() {
    return (
      <div className="friend-drawer friend-drawer--onhover">
        <img
          className="profile-image"
          src="https://www.clarity-enhanced.net/wp-content/uploads/2020/06/robocop.jpg"
          alt=""
        />
        <div className="text">
          <h6>Robo Cop</h6>
          <p className="text-muted">Hey, you're arrested!</p>
        </div>
        <span className="time text-muted small">13:21</span>
      </div>
    );
  }
}

export default ListChatItem;
