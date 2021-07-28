import React, { Component } from "react";
import * as actions from "../../../actions/index";
import { connect } from "react-redux";
class Right extends Component {
  checkIssetProduct = (product, productMain) => {
    var carts = this.props.carts;
    product.Color =
      product.Color === "" ? productMain.UrlImage[0].Color : product.Color;
    product.Size =
      product.Size === "" ? productMain.SizeProduct[0].Size : product.Size;
    var index = carts.findIndex(
      (element) =>
        product.Color === element.cart.Color &&
        product.Size === element.cart.Size &&
        product.IDProduct === element.cart.IDProduct
    );
    return index;
  };
  addCartRequest = () => {
    window.scrollTo(0, 0);
    var index = this.checkIssetProduct(
      this.props.detailProduct.productChoose,
      this.props.detailProduct.product
    );
    var carts = this.props.carts;
    if (
      this.checkIssetProduct(
        this.props.detailProduct.productChoose,
        this.props.detailProduct.product
      ) === -1
    ) {
      this.props.addCartRequest(
        this.props.detailProduct.productChoose,
        this.props.detailProduct.product
      );
    } else {
      var cart = this.props.detailProduct.productChoose;
      cart.id = carts[index].cart.id;
      this.props.updateCartIssetRequest(cart, this.props.detailProduct.product);
    }
  };
  render() {
    return (
      <div className="w-1/2 flex justify-end">
        <div className="flex items-center">
          <button
            onClick={this.addCartRequest}
            type="button"
            className="px-10 py-3.5 rounded-full shadow-lg bg-organce 
            font-semibold text-sm font-semibold flex items-center text-white border-2 
            border-solid border-2 border-gray-100 ml-10 * hover:border-orangce flex 
            items-center"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
    carts: state.carts,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    addCartRequest: (cart, product) => {
      dispatch(actions.addCartRequest(cart, product));
      dispatch(actions.scrollTop());
      dispatch(actions.showModalAddCartCurrent(cart, product));
    },
    updateCartIssetRequest: (cart, product) => {
      dispatch(actions.updateCartIssetRequest(cart));
      dispatch(actions.showModalAddCartCurrent(cart, product));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Right);
