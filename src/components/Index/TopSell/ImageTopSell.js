import React, { Component } from "react";
class ImageTopSell extends Component {
  render() {
    var { imageMain, imageChange } = this.props.data;
    return (
      <div className="w-full md:w-1/2">
        <img
          src={imageChange === null ? imageMain : imageChange}
          className="w-10/12 mx-auto"
          alt=""
        />
      </div>
    );
  }
}

export default ImageTopSell;
