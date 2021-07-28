import React, { Component } from "react";
import { connect } from "react-redux";
class Second extends Component {
  render() {
    var { StateModal, DataModal } = this.props.modal;
    if (StateModal === true) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    } else {
      document
        .getElementsByTagName("body")[0]
        .classList.remove("overflow-hidden");
    }
    return (
      <div
        className={
          StateModal === true
            ? "w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed z-50"
            : "w-full h-screen bg-opacity-50 bg-black top-0 left-0 fixed hidden z-50"
        }
        id="second"
      >
        {DataModal}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Second);
