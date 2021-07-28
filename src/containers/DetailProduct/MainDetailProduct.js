import React, { Component } from "react";
import ViewProductWhenScroll from "../DetailProduct/ViewProductWhenScroll";
import HeaderNormal from "../../components/Header/HeaderNormal/HeaderNormal";
import Rule from "../General/Rule";
import ReciviceInfo from "../../components/Footer/ReciviceInfo/ReciviceInfo";
import EndFooter from "../../components/Footer/EndFooter/EndFooter";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView";
import OtherProduct from "../../components/DetailProduct/OtherProduct/OtherProduct";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";
import NotFound from "../../pages/NotFound/NotFound";
import { connect } from "react-redux";
class MainDetailProduct extends Component {
  render() {
    var product = this.props.detailProduct.product;
    return (
      <div className="w-full">
        {product === null ? (
          <NotFound />
        ) : (
          <>
            {this.props.detailProduct.viewScroll === true ? (
              <ViewProductWhenScroll />
            ) : (
              ""
            )}
            <div className="w-full relative text-white md:text-black z-30">
              <HeaderNormal />
            </div>
            <div className="w-full bg-gray-100">
              <LevelUrl />
              <hr className="my-2"></hr>
              <div className="w-full xl:w-4/5 mx-auto p-4">
                <ProductView />
                <DescribeProduct />
                <OtherProduct />
              </div>
              <Rule />
              <ReciviceInfo />
              <EndFooter />
            </div>
          </>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    detailProduct: state.detailProduct,
  };
};
export default connect(mapStateToProps)(MainDetailProduct);
