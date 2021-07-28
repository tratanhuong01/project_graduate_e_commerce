import React, { Component } from "react";
import ItemBrand from "./ItemBrand/ItemBrand";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class Brand extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand:
        this.props.filterProduct.brand === null
          ? "Tất cả"
          : this.props.filterProduct.brand,
    };
  }
  filterProductBrand = (products, brand) => {
    this.setState({
      brand: brand,
    });
    var {
      filterProductColor,
      filterProductBrand,
      filterProductSize,
      filterProductPrice,
    } = this.props;
    filterProductBrand(products, brand);
    filterProductColor(
      this.props.filterProduct.products,
      this.props.filterProduct.color
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
    var { brand } = this.state;
    var brandProduct = this.props.getProduct.brandProduct;
    brandProduct = brandProduct === null ? [] : brandProduct;
    var showItemBrands = brandProduct.map((item, index) => {
      return (
        <ItemBrand
          item={item}
          key={index}
          filterProductBrand={this.filterProductBrand}
          brand={brand}
          product={this.props.product}
        />
      );
    });
    return (
      <>
        <p className="text-xl my-3 font-semibold">Thương hiệu</p>
        <ul className="my-3 w-full max-h-72 overflow-y-auto">
          {showItemBrands}
        </ul>
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
export default connect(mapStateToProps, mapDispatchToProps)(Brand);
