import React, { Component } from "react";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Second from "../../containers/Second";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class ListProduct extends Component {
  constructor(props) {
    super(props);
    this.closeModal();
    this.getAll(this.props.product);
  }

  getAll = (products) => {
    var { getAll } = this.props;
    if (products.length > 0) {
      getAll(products);
    }
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <MainListProduct />
        <Second />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    filterProduct: state.filterProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAll: (products) => {
      dispatch(actions.getAllBrandProduct(products));
      dispatch(actions.getAllColorProduct(products));
      dispatch(actions.getAllSizeProduct(products));
    },

    closeModal: () => {
      dispatch(actions.closeModal());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ListProduct);
