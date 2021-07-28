import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import * as actions from "../../../../actions/index";
class OptionAndView extends Component {
  openModalFastViewProduct = () => {
    this.props.openModalFastViewProduct(this.props.product, null);
  };
  render() {
    var { product } = this.props;
    return (
      <div
        className="w-full hidden bg-pink-500 bg-opacity-30 h-64 absolute top-0 
        left-0 justify-center items-product animate__animated animate__fadeIn"
      >
        <div className="w-full flex items-center">
          <div className="w-full text-center">
            <div
              className="w-4/5 p-3 mx-auto rounded-full border-2 border-solid
              border-white font-bold text-black bg-white hover:bg-organce hover:text-white mb-2"
            >
              <Link to={`/detail-product/${product.Path}`}>Tùy chọn</Link>
            </div>
            <button
              onClick={this.openModalFastViewProduct}
              type="button"
              className="w-4/5 p-3 mx-auto rounded-full border-2 border-solid
              border-white font-bold text-black bg-white hover:bg-organce hover:text-white"
            >
              Xem nhanh
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    openModalFastViewProduct: (product, slug) => {
      dispatch(actions.resetDetailProduct());
      dispatch(actions.viewFastProduct(product));
      dispatch(actions.openModalFastViewProduct(product, slug));
    },
  };
};
export default connect(null, mapDispatchToProps)(OptionAndView);
