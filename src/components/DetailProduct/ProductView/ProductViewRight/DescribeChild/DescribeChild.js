import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";
class DescribeChild extends Component {
  render() {
    var { product, status } = this.props.detailProduct;
    return (
      <>
        <div className="mb-3 flex">
          <p>
            <span
              className="text-gray-700 px-2 border-l-2 border-solid 
          border-gray-500"
            >
              Thương hiệu :
            </span>
            {product.BrandProduct}
          </p>
          <p>
            <span
              className="text-gray-700 ml-4 px-2 border-l-2 border-solid 
              border-gray-500"
            >
              Bảo hành :{" "}
            </span>
            12 tháng
          </p>
        </div>
        <p className="my-3 text-organce text-4xl font-semibold">
          {new Intl.NumberFormat(["ban", "id"]).format(
            product.Price.Price * ((100 - product.Price.Sale) / 100)
          )}
          <u className="text-xl pl-2">đ</u>
        </p>
        <ul className="text-gray-700 my-2 text-sm">
          <li className="my-2">Kích thước màn hình : 1,2"</li>
          <li className="my-2">Độ phân giải màn hình : 360 x 360 pixels</li>
          <li className="my-2">Luôn hiển thị : có</li>
          {status === true ? (
            ""
          ) : (
            <li className="my-7">
              <Link
                className="bg-organce px-10 py-2.5 rounded-full 
                    text-white font-semibold"
                to={`${Config.PAGE_DETAIL_PRODUCT}/${product.Path}`}
              >
                Xem chi tiết
              </Link>
            </li>
          )}
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
export default connect(mapStateToProps)(DescribeChild);
