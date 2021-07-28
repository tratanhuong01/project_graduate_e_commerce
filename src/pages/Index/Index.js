import React, { Component, Fragment } from "react";
import Second from "../../containers/Second";
import MainIndex from "../../containers/Index/MainIndex";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Index extends Component {
  constructor(props) {
    super(props);
    this.closeModal();
    this.getProductTopSell(this.props.product);
    this.props.setModalDefault();
  }
  getProductTopSell = (product) => {
    if (product.length > 0) this.props.getProductTopSell(product);
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <Fragment>
        <MainIndex />
        <Second isPopup={true} />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    getProductTopSell: (products) => {
      dispatch(actions.getProductTopSell(products));
    },
    closeModal: () => {
      dispatch(actions.closeModal());
    },
    setModalDefault: () => {
      dispatch(actions.setModalDefault());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Index);
