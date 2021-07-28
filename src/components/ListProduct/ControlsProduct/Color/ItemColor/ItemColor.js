import React, { Component } from "react";

class ItemColor extends Component {
  filterProductColor = () => {
    this.props.filterProductColor(this.props.products, this.props.item.color);
  };

  render() {
    return (
      <li
        onClick={this.filterProductColor}
        className={
          `${
            this.props.color === this.props.item.color
              ? " border-yellow-400 "
              : "  "
          }` +
          `w-10 h-10 my-2 mr-3 ml-0 rounded-full cursor-pointer hover:border-yellow-400 
        border-4 border-solid ${this.props.item.code}`
        }
      ></li>
    );
  }
}

export default ItemColor;
