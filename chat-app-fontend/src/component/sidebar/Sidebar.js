import React from "react";
import UserInfo from "./UserInfo";
import SearchBox from "./SearchBox";
import ListChat from "./ListChat";
const user = {
  username: "thongthinh",
  avatar: "",
  name: "Thông đẹp trai",
};
class SideBar extends React.Component {
  render() {
    return (
      <div className="side-bar border-right">
        <UserInfo user={user} />
        <SearchBox />
        <ListChat />
      </div>
    );
  }
}
export default SideBar;
