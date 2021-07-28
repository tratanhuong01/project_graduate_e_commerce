import React, { Component } from "react";

class ImageChild extends Component {
  render() {
    return (
      <img
        src="/images/product_1.png"
        className="w-full p-2 cursor-pointer 
              object-cover"
        alt=""
      />
    );
  }
}

export default ImageChild;
