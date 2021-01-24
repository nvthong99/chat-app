import React from "react";
import ListChatItem from "./ListChatItem";
class ListChat extends React.Component {
  render() {
    return (
      <div className="list-chat">
        <ListChatItem />
        <ListChatItem />
        <ListChatItem />
        <ListChatItem />
        <ListChatItem />
      </div>
    );
  }
}

export default ListChat;
