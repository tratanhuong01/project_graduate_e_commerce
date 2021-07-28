import React, { Component } from "react";

class ItemSize extends Component {
  filterProductSize = () => {
    this.props.filterProductSize(this.props.products, this.props.item);
  };
  render() {
    return (
      <li
        onClick={this.filterProductSize}
        className={
          `${
            this.props.size === this.props.item
              ? " text-organce border-organce "
              : " border-white "
          }` +
          `w-10 h-10 m-2 bg-white flex justify-center border-2 border-solid 
        hover:text-organce cursor-pointer hover:border-organce`
        }
      >
        <span className="flex items-center font-semibold">
          {this.props.item}
        </span>
      </li>
    );
  }
}

export default ItemSize;
