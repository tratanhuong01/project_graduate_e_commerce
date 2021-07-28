import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
class CloseModal extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <span
        onClick={this.closeModal}
        className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
        hover:bg-gray-500 hover:text-white flex justify-center items-center fixed top-3 right-3 z-50"
      >
        &times;
      </span>
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
export default connect(null, mapDispatchToProps)(CloseModal);
