import React, { Component } from "react";
import ItemSizeProduct from "./ItemSizeProduct/ItemSizeProduct";
import { connect } from "react-redux";
class SizeProduct extends Component {
  render() {
    var { product } = this.props.detailProduct;
    var showSizeProducts = product.SizeProduct.map((size, index) => {
      return <ItemSizeProduct size={size} key={index} index={index} />;
    });
    return (
      <div className="w-full my-3">
        <p className="font-bold text-xl font-semibold">KÍCH THƯỚC :</p>
        <div className="w-full flex">{showSizeProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
export default connect(mapStateToProps)(SizeProduct);
