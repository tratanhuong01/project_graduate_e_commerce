import React, { Component } from "react";
import MainPayment from "../../containers/Payment/MainPayment";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Payment extends Component {
  constructor(props) {
    super(props);
    this.closeModal();
  }

  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <MainPayment />
        <Second />
      </>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(actions.closeModal());
    },
  };
};
export default connect(null, mapDispatchToProps)(Payment);
