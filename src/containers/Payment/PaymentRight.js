import React, { Component } from "react";
import NumberProduct from "../../components/Payment/PaymentRight/NumberProduct/NumberProduct";
import ItemProductPayment from "../../components/Payment/PaymentRight/ItemProductPayment/ItemProductPayment";
import ApplyCode from "../../components/Payment/PaymentRight/ApplyCode/ApplyCode";
import EndPayment from "../../components/Payment/PaymentRight/EndPayment/EndPayment";
import { connect } from "react-redux";
class PaymentRight extends Component {
  render() {
    var { carts } = this.props;
    carts = carts === null || typeof carts === "undefined" ? [] : carts;
    var sumMoney = 0;
    var showItemProductPayments = carts.map((item, index) => {
      sumMoney +=
        item.product.Price.Price *
        ((100 - item.product.Price.Sale) / 100) *
        item.cart.NumberChoose;
      return <ItemProductPayment item={item} key={index} />;
    });
    return (
      <div className="w-full xl:w-1/3 xl:h-screen overflow-auto py-3 px-4">
        <div className="w-full">
          <NumberProduct />
          <div className="w-full my-5 hidden xl:block">
            {showItemProductPayments}
          </div>
          <hr className="my-3 hidden xl:block"></hr>
          <ApplyCode />
          <hr className="my-3"></hr>
          <EndPayment sumMoney={sumMoney} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
  };
};
export default connect(mapStateToProps, null)(PaymentRight);
