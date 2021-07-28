import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../actions/index";
class ItemProductViewLeft extends Component {
  onMouseEnterEventImage = () => {
    var data = {
      indexImageActive: this.props.index,
      imageMain: this.props.item.Url,
      color: this.props.item.Color,
    };
    this.props.onMouseEnterEventImage(data);
  };
  render() {
    var { indexImageActive } = this.props.detailProduct;
    return (
      <li className="w-full p-3">
        <img
          onMouseEnter={this.onMouseEnterEventImage}
          src={this.props.item.Url}
          className={
            indexImageActive === this.props.index
              ? "w-full border-2 border-solid border-orangce hover:border-organce cursor-pointer"
              : "w-full border-2 border-solid border-white hover:border-organce cursor-pointer"
          }
          alt=""
        />
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    onMouseEnterEventImage: (data) => {
      dispatch(actions.onMouseEnterEventImage(data));
    },
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemProductViewLeft);
