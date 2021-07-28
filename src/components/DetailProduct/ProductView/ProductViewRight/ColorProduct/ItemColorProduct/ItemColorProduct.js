import React, { Component } from "react";
import * as actions from "../../../../../../actions/index";
import { connect } from "react-redux";
class ItemColorProduct extends Component {
  onMouseEnterEventImage = () => {
    var data = {
      indexImageActive: this.props.index,
      imageMain: this.props.image.Url,
      color: this.props.image.Color,
    };
    this.props.onMouseEnterEventImage(data);
  };
  render() {
    var { image } = this.props;
    var { indexImageActive } = this.props.detailProduct;
    return (
      <div className="w-20 h-20 p-1 m-1 relative image-color">
        <div
          className="px-4 py-2 bg-organce font-semibold absolute -top-12 
        left-0 text-white text-xm color"
        >
          {image.Color}
        </div>
        <img
          onMouseEnter={this.onMouseEnterEventImage}
          src={image.Url}
          className={
            indexImageActive === this.props.index
              ? "w-16 h-16 border-2 border-solid border-orangce cursor-pointer object-cover "
              : "w-16 h-16 border-2 border-solid border-white hover:border-orangce cursor-pointer object-cover "
          }
          alt=""
        />
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ItemColorProduct);
