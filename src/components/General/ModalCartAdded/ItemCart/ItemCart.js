import React, { Component, Fragment } from "react";
import * as actions from "../../../../actions/index";
import { connect } from "react-redux";
class ItemCart extends Component {
  deleteCartByIDRequest = () => {
    var { deleteCartByIDRequest, item, user } = this.props;
    deleteCartByIDRequest(item.cart.id, user);
  };
  render() {
    var { item, number } = this.props;
    var url = "";
    item.product.UrlImage.forEach(function (child, index) {
      if (child.Color === item.cart.Color) {
        url = child.Url;
      } else {
      }
    });
    return (
      <Fragment>
        <div className="w-full py-2 flex">
          <div className="w-1/3">
            <img src={url} className="w-full" alt="" />
          </div>
          <div className="w-2/3 pl-4 relative">
            <p className="mb-2">{item.product.NameProduct}</p>
            <p className="mb-2">Màu : {item.cart.Color}</p>
            <p className="text-organce mb-2">
              {new Intl.NumberFormat(["ban", "id"]).format(
                item.product.Price.Price *
                  ((100 - item.product.Price.Sale) / 100)
              )}{" "}
              <u className="mr-2">đ</u>x{number}
            </p>
            <span
              onClick={this.deleteCartByIDRequest}
              className="text-2xl font-semibold hover:text-organce 
                                            absolute right-2 bottom-2"
            >
              &times;
            </span>
          </div>
        </div>
        <hr className="my-2"></hr>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    deleteCartByIDRequest: (id, user) => {
      dispatch(actions.deleteCartByIDRequest(id, user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemCart);
