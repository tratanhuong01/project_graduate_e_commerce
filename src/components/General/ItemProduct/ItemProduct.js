import React, { Component, Fragment } from "react";
import Sale from "./Sale/Sale";
import ImageMain from "./Image/ImageMain/ImageMain";
import OptionAndView from "./OptionAndView/OptionAndView";
import ArrowUp from "./TypeProduct/ArrowDown/ArrowDown";
import ArrowDown from "./TypeProduct/ArrowDown/ArrowDown";
import ItemTypeProduct from "./TypeProduct/ItemTypeProduct/ItemTypeProduct";
import { Link } from "react-router-dom";
import * as Config from "../../../constants/Config";
class ItemProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageMain: this.props.product.UrlImage[0].Url,
      imageChange: null,
      numberIndex: -1,
    };
  }
  onMouseEnter = (url) => {
    this.setState({
      imageChange: url,
    });
  };
  onMouseLeave = () => {
    this.setState({
      imageChange: null,
      numberIndex: -1,
    });
  };
  render() {
    var { product } = this.props;
    var { imageMain, imageChange, numberIndex } = this.state;
    var showImages = product.UrlImage.map((item, index) => {
      return (
        <ItemTypeProduct
          key={index}
          image={item}
          index={index}
          onMouseEnters={this.onMouseEnter}
          onMouseLeaves={this.onMouseLeave}
          numberIndex={numberIndex}
        />
      );
    });
    return (
      <Fragment>
        <div className="w-46% m-2 bg-white relative product__main z-10">
          {product.Price.Sale === 0 ? "" : <Sale sale={product.Price.Sale} />}
          <div className="w-full relative h-64 mx-auto product ">
            <ImageMain URL={imageChange === null ? imageMain : imageChange} />
            <OptionAndView product={product} />
          </div>
          <div className="w-full mx-auto p-1 flex">
            <ArrowUp />
            <ul className="w-11/12 flex justify-center">{showImages}</ul>
            <ArrowDown />
          </div>
          <p
            className="p-2 hover:text-organce text-center cursor-pointer 
                    text-xm h-16 flex justify-center"
          >
            <span className="flex items-center font-semibold">
              <Link to={`${Config.PAGE_DETAIL_PRODUCT}/` + product.Path}>
                {product.NameProduct}
              </Link>
            </span>
          </p>
          <p
            className="p-2 pt-0 text-organce text-center cursor-pointer 
                    text-xm"
          >
            {new Intl.NumberFormat().format(
              product.Price.Price * ((100 - product.Price.Sale) / 100)
            )}
            <u>đ</u>&nbsp;
            <strike className="ml-3 text-gray-500">
              {new Intl.NumberFormat().format(product.Price.Price)} <u>đ</u>
            </strike>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default ItemProduct;
