import React from "react";
import { Link, Route, useLocation } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function MenuCategory(props) {
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
    const location = useLocation();
    return (
      <Route to={to} exact={exact}>
        <li
          className={`mx-2 p-2 cursor-pointer flex items-center border-b-4 
          ${
            location.pathname === to
              ? "border-organce text-organce "
              : "hover:border-organce border-white hover:text-organce "
          }`}
        >
          <Link to={to}>{label}</Link>
        </li>
      </Route>
    );
  };
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
  return <ul className="flex font-semibold">{showCategory(category)}</ul>;
}

export default MenuCategory;
