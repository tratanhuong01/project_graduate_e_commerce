import React, { Component } from "react";
import ItemColor from "./ItemColor/ItemColor";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Color extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.filterProduct.color,
    };
  }

  filterProductColor = (products, color) => {
    this.setState({
      color: color,
    });
    var {
      filterProductColor,
      filterProductBrand,
      filterProductSize,
      filterProductPrice,
    } = this.props;
    filterProductColor(products, color);
    filterProductBrand(
      this.props.filterProduct.products,
      this.props.filterProduct.brand
    );
    filterProductSize(
      this.props.filterProduct.products,
      this.props.filterProduct.size
    );
    // filterProductPrice(
    //   this.props.filterProduct.products,
    //   this.props.filterProduct.price
    // );
  };
  render() {
    var { getProduct } = this.props;
    var colorProduct =
      getProduct.colorProduct === null ? [] : getProduct.colorProduct;
    var showColorProducts = colorProduct.map((item, index) => {
      return (
        <ItemColor
          item={item}
          key={index}
          filterProductColor={this.filterProductColor}
          color={this.state.color}
          products={this.props.product}
        />
      );
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Màu sắc</p>
        <ul className="w-full flex-wrap my-3 flex">{showColorProducts}</ul>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    getProduct: state.getProduct,
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
export default connect(mapStateToProps, mapDispatchToProps)(Color);
