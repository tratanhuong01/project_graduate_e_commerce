import React, { Component } from "react";
import ItemProduct from "../../components/General/ItemProduct/ItemProduct";
import { connect } from "react-redux";
class ListProduct extends Component {
  render() {
    var { filterProduct, product } = this.props;
    var products = filterProduct.products;
    products =
      typeof products !== "undefined" ? filterProduct.products : product;
    var showProducts = "";
    showProducts = products.map((item, index) => {
      return <ItemProduct key={index} product={item} />;
    });
    return (
      <div className="w-full md:w-4/5 mx-auto xl:w-3/4">
        <p className="mb-6 text-2xl pl-2 font-semibold">Tất cả sản phẩm</p>
        <div className="w-full flex flex-wrap my-4 z-10">{showProducts}</div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    filterProduct: state.filterProduct,
  };
};
export default connect(mapStateToProps, null)(ListProduct);
