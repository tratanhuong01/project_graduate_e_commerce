import React from "react";
import Index from "./pages/Index";
import ListProduct from "./pages/ListProduct";
import DetailProduct from "./pages/DetailProduct";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import News from "./pages/News";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import * as Config from "./constants/Config";
import NewsDetail from "./pages/NewsDetail";
import Wishlist from "./pages/Wishlist";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import AccessToken from "./pages/AccessToken";
import ProcessBill from "./pages/verify/ProcessBill";

const routes = [
  {
    path: Config.PAGE_INDEX,
    exact: true,
    main: () => <Index />,
    once: false,
    breadcrumb: "Trang chủ",
  },
  {
    path: Config.PAGE_PRODUCT,
    exact: true,
    main: (match) => <ListProduct match={match} />,
    once: false,
    breadcrumb: "Sản phẩm",
  },
  {
    path: `${Config.PAGE_DETAIL_PRODUCT}/:slug`,
    exact: true,
    main: ({ match }) => <DetailProduct match={match} />,
    once: false,
    breadcrumb: "Chi tiết sản phẩm",
  },
  {
    path: Config.PAGE_CART,
    exact: false,
    main: () => <Cart />,
    once: false,
    breadcrumb: "Giỏ hàng",
  },
  {
    path: Config.PAGE_PAYMENT,
    exact: false,
    main: () => <Payment />,
    once: true,
    breadcrumb: "Thanh toán",
  },
  {
    path: Config.PAGE_ABOUT,
    exact: false,
    main: () => <About />,
    once: false,
    breadcrumb: "Giới thiệu",
  },
  {
    path: `${Config.PAGE_NEWS}`,
    exact: true,
    main: () => <News />,
    once: false,
    breadcrumb: "Tin tức",
  },
  {
    path: `${Config.PAGE_NEWS}/:slug`,
    exact: true,
    main: (match) => <NewsDetail match={match} />,
    once: false,
    breadcrumb: "Chi tiết tin tức",
  },
  {
    path: Config.PAGE_CONTACT,
    exact: false,
    main: () => <Contact />,
    once: false,
    breadcrumb: "Liên hệ",
  },
  {
    path: Config.PAGE_SEARCH,
    exact: true,
    main: () => <Search />,
    once: false,
    breadcrumb: "Tìm kiếm",
  },
  {
    path: Config.PAGE_WISHLIST,
    exact: true,
    main: () => <Wishlist />,
    once: false,
    breadcrumb: "Yêu thích",
  },
  {
    path: `${Config.PAGE_PROFILE_USER}/:slug`,
    exact: true,
    main: (match) => <Profile match={match} />,
    once: false,
    breadcrumb: "Thông tin cá nhân",
  },
  {
    path: Config.PAGE_NEWS + "/:slugNews",
    exact: true,
    main: (match) => <NewsDetail match={match} />,
    once: false,
  },
  {
    path: `${Config.PAGE_PRODUCT}/:slugCategoryProduct`,
    exact: true,
    main: (match) => <ListProduct match={match} />,
    once: false,
  },
  {
    path: `${Config.PAGE_PRODUCT}/:slugCategoryProduct/:slugGroupProduct`,
    exact: true,
    main: (match) => <ListProduct match={match} />,
    once: false,
  },
  {
    path: Config.PAGE_LOGIN,
    exact: true,
    main: () => <Login />,
    once: false,
  },
  {
    path: "/verify/account/register",
    exact: true,
    main: () => <AccessToken />,
    once: false,
  },
  {
    path: "/verify/bill/customer",
    exact: true,
    main: () => <ProcessBill />,
    once: true,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
    once: false,
  },
];

export default routes;
