import React, { Component } from "react";
import { Link } from "react-router-dom";
import ItemCart from "./ItemCart/ItemCart";
import * as Config from "../../../constants/Config";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
class ModalCartAdded extends Component {
  openModalLogin = () => {
    this.props.openModalLogin();
  };
  render() {
    var { carts, user } = this.props;
    var sumMoney = 0;
    var showAllCart = carts.map((item, index) => {
      sumMoney +=
        item.product.Price.Price *
        ((100 - item.product.Price.Sale) / 100) *
        item.cart.NumberChoose;
      return (
        <ItemCart item={item} key={index} number={item.cart.NumberChoose} />
      );
    });
    return (
      <div
        className="w-80 rounded-lg bg-white absolute animate__animated animate__zoomIn 
        top-20 right-1/4 text-gray-700 z-50 modal__cart__added border-2 border-solid 
        border-gray-200 shadow-lg "
      >
        <div className="w-full max-h-72 overflow-y-auto p-2 scrollbar-css">
          {showAllCart.length === 0 ? (
            <>
              <p className="text-center font-semibold my-4">
                Chưa có sản phẩm nào trong giỏ hàng
              </p>
              <div
                className="flex justify-center items-center text-blue-500 
                font-semibold"
              >
                <Link to={Config.PAGE_PRODUCT}>Xem thêm sản phẩm</Link>
              </div>
            </>
          ) : (
            showAllCart
          )}
        </div>
        <hr className="my-1"></hr>
        <div className="w-full flex p-2 h-12">
          <div
            className="w-1/2 float-left justify-start flex items-center 
            font-semibold text-base"
          >
            Thành tiền :
          </div>
          <div
            className="w-1/2 float-right justify-end flex items-center 
            text-organce pr-4"
          >
            {new Intl.NumberFormat(["ban", "id"]).format(sumMoney)} <u>đ</u>
          </div>
        </div>

        <hr className="my-1"></hr>
        <div className="w-full p-2 h-16">
          <Link
            to={Config.PAGE_CART}
            className="px-6 py-2 rounded-full bg-organce 
            hover:bg-white hover:border-white border-2 border-solid text-white
            border-white shadow-lg float-left flex items-center font-semibold 
            hover:text-black ml-2"
          >
            Giỏ hàng
          </Link>
          {sumMoney === 0 ? (
            <input
              type="button"
              className="px-6 py-2 rounded-full border-white border-2 border-solid bg-gray-500
              shadow-lg float-right flex items-center font-semibold ml-2 cursor-not-allowed text-white"
              value="Thanh toán"
              onChange={() => ""}
            />
          ) : user === null ? (
            <button
              onClick={this.openModalLogin}
              type="button"
              className="px-6 py-2 rounded-full hover:bg-organce 
              bg-white border-white border-2 border-solid hover:text-white
              hover:border-white shadow-lg float-right flex items-center font-semibold 
              text-black ml-2"
            >
              Thanh toán
            </button>
          ) : (
            <Link
              to={Config.PAGE_PAYMENT}
              className="px-6 py-2 rounded-full hover:bg-organce 
              bg-white border-white border-2 border-solid hover:text-white
              hover:border-white shadow-lg float-right flex items-center font-semibold 
              text-black ml-2"
            >
              Thanh toán
            </Link>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(ModalCartAdded);
