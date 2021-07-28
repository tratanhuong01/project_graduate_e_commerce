import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../../actions/index";
import * as Config from "../../../constants/Config";
const category = [
  {
    name: "Trang chủ",
    to: Config.PAGE_INDEX,
    exact: true,
  },
  {
    name: "Sản phẩm",
    to: Config.PAGE_PRODUCT,
    exact: true,
  },
  {
    name: "Tin tức",
    to: Config.PAGE_NEWS,
    exact: true,
  },
  {
    name: "Giới thiệu",
    to: Config.PAGE_ABOUT,
    exact: true,
  },
  {
    name: "Liên hệ",
    to: Config.PAGE_CONTACT,
    exact: true,
  },
];
const CategoryLink = ({ label, to, exact }) => {
  return (
    <Route to={to} exact={exact}>
      <li className="hover:text-organce px-2.5 py-4">
        <Link to={to}>{label}</Link>
      </li>
    </Route>
  );
};
class Category extends Component {
  showCategory = (category) => {
    var result = null;
    if (category.length > 0) {
      result = category.map((item, index) => {
        return (
          <CategoryLink
            key={index}
            label={item.name}
            to={item.to}
            exact={item.exact}
          />
        );
      });
    }
    return result;
  };
  closeModal = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <div
          className="w-40 absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 m-2"
        >
          <ul className="w-full text-xl font-semibold text-white">
            {this.showCategory(category)}
          </ul>
        </div>
        <span
          onClick={this.closeModal}
          className="font-bold text-5xl absolute top-32 right-44 
            text-white cursor-pointer h-0"
        >
          &times;
        </span>
      </>
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
export default connect(null, mapDispatchToProps)(Category);
