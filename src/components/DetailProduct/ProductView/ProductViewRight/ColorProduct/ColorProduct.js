import React, { Component } from "react";
import ItemColorProduct from "./ItemColorProduct/ItemColorProduct";
import { connect } from "react-redux";
class ColorProduct extends Component {
  render() {
    var { product } = this.props.detailProduct;
    var showColorImages = product.UrlImage.map((image, index) => {
      return <ItemColorProduct image={image} key={index} index={index} />;
    });
    return (
      <div className="w-full my-3">
        <p className="font-bold text-xl font-semibold">MÀU SẮC :</p>
        <div className="w-full flex">{showColorImages}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
export default connect(mapStateToProps)(ColorProduct);
