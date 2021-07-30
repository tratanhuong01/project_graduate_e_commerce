import React from "react";
import { useDispatch } from "react-redux";
import { Link, Route } from "react-router-dom";
import * as Config from "../../../constants/Config";
import * as modalsAction from "../../../actions/modal/index";

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

function Category(props) {
  //
  const showCategory = (category) => {
    let result = null;
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
  const dispatch = useDispatch();
  //
  return (
    <>
      <div
        className="w-40 absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 m-2"
      >
        <ul className="w-full text-xl font-semibold text-white">
          {showCategory(category)}
        </ul>
      </div>
      <span
        onClick={() => dispatch(modalsAction.closeModal())}
        className="font-bold text-5xl absolute top-32 right-44 
            text-white cursor-pointer h-0"
      >
        &times;
      </span>
    </>
  );
}

export default Category;
