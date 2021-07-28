import React, { Component } from "react";
import ItemSize from "./ItemSize/ItemSize";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Size extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.filterProduct.size,
    };
  }
  filterProductSize = (products, size) => {
    this.setState({
      size: size,
    });
    var {
      filterProductColor,
      filterProductBrand,
      filterProductSize,
      filterProductPrice,
    } = this.props;
    filterProductSize(products, size);
    filterProductColor(
      this.props.filterProduct.products,
      this.props.filterProduct.color
    );
    filterProductBrand(
      this.props.filterProduct.products,
      this.props.filterProduct.brand
    );
    // filterProductPrice(
    //   this.props.filterProduct.products,
    //   this.props.filterProduct.price
    // );
  };
  render() {
    var { getProduct } = this.props;
    var sizeProduct =
      getProduct.sizeProduct === null ? [] : getProduct.sizeProduct;
    var showSizeProducts = sizeProduct.map((item, index) => {
      return (
        <ItemSize
          item={item}
          key={index}
          products={this.props.product}
          filterProductSize={this.filterProductSize}
          size={this.state.size}
        />
      );
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Kích thước</p>
        <ul className="w-full my-3 flex-wrap flex">{showSizeProducts}</ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
    product: state.product,
    filterProduct: state.filterProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    filterProductBrand: (products, data) => {
      dispatch(actions.filterProductBrand(products, data));
    },
    filterProductSize: (products, data) => {
      dispatch(actions.filterProductSize(products, data));
    },
    filterProductColor: (products, data) => {
      dispatch(actions.filterProductColor(products, data));
    },
    filterProductPrice: (products, data) => {
      dispatch(actions.filterProductPrice(products, data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Size);
