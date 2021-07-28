import React, { Component } from "react";
import ItemProductOther from "../../General/ItemProduct/ItemProductOther";
import { connect } from "react-redux";
class OtherProduct extends Component {
  render() {
    var products = this.props.product;
    products = products.slice(0, 4);
    var showItemProductOther = products.map((item, index) => {
      return <ItemProductOther product={item} key={index} index={index} />;
    });
    return (
      <div className="w-full my-5 z-0">
        <p className="font-semibold my-4 text-center text-4xl hover:text-organce cursor-pointer">
          Sản phẩm khác
        </p>
        <div className="w-full flex">{showItemProductOther}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
export default connect(mapStateToProps)(OtherProduct);
