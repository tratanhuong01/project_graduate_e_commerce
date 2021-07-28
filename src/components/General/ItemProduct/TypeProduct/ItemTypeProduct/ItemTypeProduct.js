import React, { Component } from "react";

class ItemTypeProduct extends Component {
  onMouseLeave = () => {
    this.props.onMouseLeaves(this.props.image.Url);
  };
  onMouseEnter = () => {
    this.props.onMouseEnters(this.props.image.Url);
  };
  render() {
    return (
      <li
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={`w-1/3 p-1 ${
          this.props.index === this.props.numberIndex
            ? "border-gray-300"
            : "hover:border-gray-300"
        } border-2 border-white border-solid`}
      >
        <img
          src={this.props.image.Url}
          className="w-full p-2 cursor-pointer 
          object-cover"
          alt=""
        ></img>
      </li>
    );
  }
}

export default ItemTypeProduct;
