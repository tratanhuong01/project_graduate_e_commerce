import React, { Component } from "react";
import { connect } from "react-redux";
class Left extends Component {
  render() {
    var { product, imageMain } = this.props.detailProduct;
    return (
      <div className="w-1/2 flex flex-wrap">
        <div className="w-1/5">
          <img
            src={imageMain === null ? product.UrlImage[0].Url : imageMain}
            alt=""
          />
        </div>
        <div className="w-4/5 pl-4">
          <p className="mb-2">{product.NameProduct}</p>
          <p className="text-xm">
            <span className="text-organce mr-4">
              {new Intl.NumberFormat(["ban", "id"]).format(
                product.Price.Price * ((100 - product.Price.Sale) / 100)
              )}
              <u>đ</u>
            </span>
            <span className="text-gray-500 mr-4">
              <strike>
                {new Intl.NumberFormat(["ban", "id"]).format(
                  product.Price.Price
                )}{" "}
                <u>đ</u>
              </strike>
            </span>
            <span className="mr-4">|</span>
            <span className="text-gray-500">Giao hàng 1 - 2 ngày làm việc</span>
          </p>
          <hr className="my-3"></hr>
          <ul className="flex">
            <li className="cursor-pointer hover:text-organce text-gray-500">
              Thông tin sản phẩm
            </li>
            <li className="px-3">|</li>
            <li className="cursor-pointer text-organce">Mô tả sản phẩm</li>
          </ul>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
export default connect(mapStateToProps, null)(Left);
