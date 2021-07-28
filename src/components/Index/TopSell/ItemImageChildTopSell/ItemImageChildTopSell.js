import React, { Component } from "react";

class ItemImageChildTopSell extends Component {
  onMouseLeave = () => {
    this.props.onMouseLeaves();
  };
  onMouseEnter = () => {
    this.props.onMouseEnters(this.props.item.Url);
  };
  render() {
    return (
      <li
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className="w-48 h-48 p-2"
      >
        <img
          src={this.props.item.Url}
          className={`w-full p-1 cursor-pointer ${
            this.props.numberIndex === this.props.index
              ? "border-gray-300 "
              : "hover:border-gray-300 "
          }
          border-2 border-solid border-white`}
          alt=""
        />
      </li>
    );
  }
}

export default ItemImageChildTopSell;
