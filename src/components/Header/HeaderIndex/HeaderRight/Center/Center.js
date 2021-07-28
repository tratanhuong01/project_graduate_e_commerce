import React, { Component } from "react";
import ModalCartAdded from "../../../../General/ModalCartAdded/ModalCartAdded";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as Config from "../../../../../constants/Config";
class Center extends Component {
  render() {
    var { carts } = this.props;
    return (
      <li className="py-6 px-2 flex relative cursor-pointer toggel__hover__cart_show">
        <Link to={Config.PAGE_CART}>
          <i className="bx bxs-shopping-bag text-3xl"></i>
        </Link>
        <span
          className="w-5 h-5 rounded-full border-2 border-solid 
            border-white flex justify-center items-center py-0.5 font-bold 
            absolute right-0.5 bg-white text-yellow-500 top-4 text-sm"
        >
          {carts.length}
        </span>
        <ModalCartAdded carts={carts} />
      </li>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    carts: state.carts,
    user: state.user,
  };
};
export default connect(mapStateToProps)(Center);
