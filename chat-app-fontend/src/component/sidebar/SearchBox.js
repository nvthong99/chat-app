import React from "react";
class SearchBox extends React.Component {
  render() {
    return (
      <div className="search-box">
        <div className="input-wrapper">
          <i className="material-icons">search</i>
          <input placeholder="Search here" type="text" />
        </div>
      </div>
    );
  }
}

export default SearchBox;
