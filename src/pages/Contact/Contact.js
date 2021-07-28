import React, { Component } from "react";
import Second from "../../containers/Second";
import MainContact from "../../containers/Contact/MainContact";
import * as actions from "../../actions/index";
import { connect } from "react-redux";
class Contact extends Component {
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
        <MainContact />
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
export default connect(null, mapDispatchToProps)(Contact);
