import React from "react";
import { Link, Route } from "react-router-dom";
import * as Config from "../../../../constants/Config";
import CategoryIndexLeftTop from "../CategoryIndexLeft/CategoryIndexLeftTop/CategoryIndexLeftTop";
import ItemCategoryProduct from "./ItemCategoryProduct/ItemCategoryProduct";

function MainCategory(props) {
  //
  const { menu, setMenu, categorys } = props;
  const category = [
    {
      name: "Trang chủ",
      to: Config.PAGE_INDEX,
      exact: true,
      icon: "bx bx-home",
    },
    {
      name: "Sản phẩm",
      to: Config.PAGE_PRODUCT,
      exact: true,
      icon: "bx bxl-product-hunt",
    },
    {
      name: "Tin tức",
      to: Config.PAGE_NEWS,
      exact: true,
      icon: "bx bx-news",
    },
    {
      name: "Giới thiệu",
      to: Config.PAGE_ABOUT,
      exact: true,
      icon: "bx bx-detail",
    },
    {
      name: "Liên hệ",
      to: Config.PAGE_CONTACT,
      exact: true,
      icon: "bx bxs-megaphone",
    },
  ];
  const CategoryLink = ({ label, to, exact, icon }) => {
    return (
      <Route to={to} exact={exact}>
        {to === Config.PAGE_PRODUCT ? (
          <ItemCategoryProduct
            label={label}
            icon={icon}
            categorys={categorys}
          />
        ) : (
          <Link
            to={to}
            className="w-full flex items-center p-2.5 flex border-b-2 border-solid border-gray-200 
            cursor-pointer hover:text-organce  dark:border-dark-third"
          >
            <span className={`${icon} text-2xl mr-3 `}></span>
            <span className="font-semibold">{label}</span>
          </Link>
        )}
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
            icon={item.icon}
          />
        );
      });
    }
    return result;
  };
  //
  return (
    <div
      className={`${
        menu ? "" : "hidden"
      } w-2/3 fixed top-0 left-0 md:relative md:w-56 lg:w-full bg-white text-gray-800 
        h-screen md:h-auto max-h-full overflow-y-auto md:overflow-visible scrollbar-css category__index__left dark:bg-dark-main dark:text-white`}
    >
      <div className="w-full p-2 md:hidden">
        <CategoryIndexLeftTop setMenu={(state) => setMenu(state)} menu={menu} />
      </div>
      <div className="w-full block md:hidden">{showCategory(category)}</div>
    </div>
  );
}

export default MainCategory;
