import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../actions/index";
class Left extends Component {
  constructor(props) {
    super(props);
    this.props.checkHaveLogin();
  }

  openModalLogin = () => {
    this.props.openModalLogin();
  };
  openModalRegister = () => {
    this.props.openModalRegister();
  };
  logoutUser = () => {
    this.props.logoutUser();
  };
  render() {
    var { user } = this.props;
    return (
      <li className="p-2 hidden md:flex">
        {user !== null ? (
          <div className="flex items-center">
            <img
              src="/images/avatar.jpg"
              className="w-8 h-8 rounded-full mr-3"
              alt=""
            />
            <span className="font-semibold text-xm mr-1">{user.fullName}</span>
            <i className="bx bxs-chevron-down"></i>
            <i
              onClick={this.logoutUser}
              className="bx bx-exit text-2xl bg-white ml-3 text-black p-1.5 border-2 border-solid
              rounded-full cursor-pointer hover:bg-organce hover:border-white hover:text-white"
            ></i>
          </div>
        ) : (
          <div className="flex items-center flex-wrap">
            <p
              onClick={this.openModalRegister}
              className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
            >
              Đăng kí
            </p>
            <p
              onClick={this.openModalLogin}
              className="cursor-pointer mr-3 text-xm py-2 rounded-full hover:bg-organce hover:border-white
              bg-white border-orangce text-gray-700 px-6 font-semibold border-2 border-solid hover:text-gray-100"
            >
              Đăng nhập
            </p>
          </div>
        )}
      </li>
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
    openModalLogin: () => {
      dispatch(actions.openModalLogin());
    },
    openModalRegister: () => {
      dispatch(actions.openModalRegister());
    },
    checkHaveLogin: () => {
      dispatch(actions.checkHaveLogin());
    },
    logoutUser: () => {
      dispatch(actions.logoutUser());
      dispatch(actions.checkHaveLogin());
      dispatch(actions.resetDetailProduct());
      dispatch(actions.getAllCartRequest(null));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Left);
