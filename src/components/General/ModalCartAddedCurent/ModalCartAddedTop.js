import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
class ModalCartAddedTop extends Component {
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <div className="w-full bg-gray-200 relative rounded-t-lg p-2 border-b-2 border-gray-300 border-solid">
        <p
          className="mb-2 font-semibold text-xl hover:text-organce flex 
            items-center cursor-pointer pt-1"
        >
          <i className="bx bx-check text-2xl mr-3"></i>Sản phẩm vừa được thêm
          vào giỏ hàng
        </p>
        <span
          onClick={this.closeModal}
          className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
            hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-2 right-2"
        >
          &times;
        </span>
      </div>
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
export default connect(null, mapDispatchToProps)(ModalCartAddedTop);
