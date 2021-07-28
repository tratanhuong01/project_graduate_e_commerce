import React, { Component } from "react";
import ImageTopSell from "../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../components/Index/TopSell/InfoTopSell";
import { connect } from "react-redux";
import ImageChildTopSell from "../../components/Index/TopSell/ImageChildTopSell";
class TopSell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageMain: this.props.getProduct.productTopSell.UrlImage[0].Url,
      imageChange: null,
      numberIndex: -1,
    };
  }
  onMouseEnter = (url) => {
    console.log("enter");
    this.setState({
      imageChange: url,
    });
  };
  onMouseLeave = () => {
    this.setState({
      imageChange: null,
      numberIndex: -1,
    });
  };
  render() {
    var { productTopSell } = this.props.getProduct;
    var { imageMain, imageChange, numberIndex } = this.state;
    return (
      <>
        <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
          {productTopSell === null ? (
            ""
          ) : (
            <>
              <ImageTopSell
                product={productTopSell}
                data={{ imageMain, imageChange, numberIndex }}
              />
              <InfoTopSell product={productTopSell} />
            </>
          )}
        </div>
        <ImageChildTopSell
          onMouseEnters={this.onMouseEnter}
          onMouseLeaves={this.onMouseLeave}
          product={productTopSell}
          data={{ imageMain, imageChange, numberIndex }}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    getProduct: state.getProduct,
  };
};
export default connect(mapStateToProps, null)(TopSell);
