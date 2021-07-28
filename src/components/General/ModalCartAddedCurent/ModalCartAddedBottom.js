import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../../actions/index";
import * as Config from "../../../constants/Config";
class ModalCartAddedBottom extends Component {
  openModalLogin = () => {
    this.props.openModalLogin();
  };
  render() {
    var { product, cart, user } = this.props;
    var url = "";
    product.UrlImage.forEach(function (item, index) {
      if (item.Color === cart.Color) {
        url = item.Url;
      } else {
      }
    });
    return (
      <div className="w-full mt-5">
        <div className="w-11/12 mx-auto flex">
          <div className="w-1/4">
            <img src={url} className="w-full object-cover" alt="" />
          </div>
          <div className="w-3/4 flex pl-4">
            <div className="flex flex-wrap items-center w-full">
              <div className="">
                <p className="w-full mb-2 text-gray-700 cursor-pointer text-xl font-semibold">
                  {product.NameProduct}
                </p>
                <p className="text-organce">
                  {new Intl.NumberFormat(["ban", "id"]).format(
                    product.Price.Price * ((100 - product.Price.Sale) / 100)
                  )}
                  <u>đ</u>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex my-3">
          <div className="w-1/2 flex">
            <p className="flex items-center hover:text-organce text-gray-700 cursor-pointer">
              <i className="bx bx-caret-right mr-3"></i>
              Giỏ hàng của bạn hiện có (<span>{this.props.carts.length}</span>)
              sản phẩm
            </p>
          </div>
          <div className=" w-1/2 flex justify-end">
            <div className="flex items-center">
              {user === null ? (
                <button
                  onClick={this.openModalLogin}
                  button="button"
                  className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
                  font-semibold text-sm font-semibold flex items-center text-white border-2 
                  border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
                  items-center"
                >
                  Tiến hành thanh toán&nbsp;&nbsp;
                  <i className="bx bx-right-arrow-alt text-2xl"></i>
                </button>
              ) : (
                <Link
                  to={Config.PAGE_PAYMENT}
                  className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
                  font-semibold text-sm font-semibold flex items-center text-white border-2 
                  border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
                  items-center"
                >
                  Tiến hành thanh toán&nbsp;&nbsp;
                  <i className="bx bx-right-arrow-alt text-2xl"></i>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalLogin: () => {
      dispatch(actions.openModalLogin());
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalCartAddedBottom);
