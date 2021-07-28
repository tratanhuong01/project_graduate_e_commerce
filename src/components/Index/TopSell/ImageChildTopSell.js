import React, { Component } from "react";
import ItemImageChildTopSell from "./ItemImageChildTopSell/ItemImageChildTopSell";
class ImageChildTopSell extends Component {
  onMouseLeave = () => {
    this.props.onMouseLeaves();
  };
  onMouseEnter = (url) => {
    this.props.onMouseEnters(url);
  };
  render() {
    var { product } = this.props;
    var UrlImage = product === null ? [] : product.UrlImage;
    var { numberIndex } = this.props.data;
    var showImageProducts = UrlImage.map((item, index) => {
      return (
        <ItemImageChildTopSell
          item={item}
          key={index}
          index={index}
          onMouseEnters={this.onMouseEnter}
          onMouseLeaves={this.onMouseLeave}
          numberIndex={numberIndex}
        />
      );
    });
    return (
      <div className="w-7/12 mx-auto p-4 flex justify-center">
        <div className="flex justify-center">
          <span className="flex items-center cursor-pointer">
            <i className="bx bxs-left-arrow-alt text-4xl text-gray-500"></i>
          </span>
        </div>
        <ul className="flex justify-center">{showImageProducts}</ul>
        <div className="flex justify-center">
          <span className="flex items-center cursor-pointer">
            <i className="bx bxs-right-arrow-alt text-4xl text-gray-500"></i>
          </span>
        </div>
      </div>
    );
  }
}

export default ImageChildTopSell;
