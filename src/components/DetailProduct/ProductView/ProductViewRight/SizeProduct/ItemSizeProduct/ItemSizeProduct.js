import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../../actions/index";
class ItemSizeProduct extends Component {
  chooseSizeProduct = () => {
    var data = {
      indexSizeActive: this.props.index,
      size: this.props.size.Size,
    };
    this.props.chooseSizeProduct(data);
  };
  render() {
    var { indexSizeActive } = this.props.detailProduct;
    return (
      <div
        onClick={this.chooseSizeProduct}
        className={
          indexSizeActive === this.props.index
            ? "w-10 h-10 p-1 m-1 flex justify-center border-2 border-solid text-organce " +
              "border-orangce bg-white rounded-full cursor-pointer"
            : "w-10 h-10 p-1 m-1 flex justify-center border-2 border-solid text-gray-700 " +
              "border-white  hover:border-organce bg-white rounded-full cursor-pointer"
        }
      >
        <span className=" text-xm flex items-center font-bold">
          {this.props.size.Size}
        </span>
      </div>
    );
  }
}
const mapToStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
const mapDipatchToProps = (dispatch, props) => {
  return {
    chooseSizeProduct: (data) => {
      dispatch(actions.chooseSizeProduct(data));
    },
  };
};
export default connect(mapToStateToProps, mapDipatchToProps)(ItemSizeProduct);
