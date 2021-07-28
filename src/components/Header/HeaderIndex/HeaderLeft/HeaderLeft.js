import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../actions/index";
class HeaderLeft extends Component {
  openCategory = () => {
    this.props.openCategory();
  };
  render() {
    return (
      <div className="w-1/3 pl-5 flex text-white">
        <p
          onClick={this.openCategory}
          className="flex items-center cursor-pointer"
        >
          <i className="bx bxs-category text-4xl mr-4"></i>
          <span className="text-xl font-semibold hidden md:block">
            Danh mục
          </span>
        </p>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    openCategory: () => {
      dispatch(actions.openCategory());
    },
  };
};
export default connect(null, mapDispatchToProps)(HeaderLeft);
