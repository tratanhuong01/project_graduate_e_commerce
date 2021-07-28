import React, { Component } from "react";

class ItemPrice extends Component {
  render() {
    return (
      <li className="my-2">
        <input
          type="radio"
          name="price"
          className="mr-3"
          onChange={() => ""}
          // checked={item === brand ? true : false}
        />
        <label className="hover:text-organce cursor-pointer font-semibold">
          Từ {this.props.from} <u>đ</u> đến {this.props.to} <u>đ</u>
        </label>
      </li>
    );
  }
}

export default ItemPrice;
