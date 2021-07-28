import Index from "./pages/Index/Index";
import ListProduct from "./pages/ListProduct/ListProduct";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Cart from "./pages/Cart/Cart";
import Payment from "./pages/Payment/Payment";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import News from "./pages/News/News";
import Contact from "./pages/Contact/Contact";
import Search from "./pages/Search/Search";
import * as Config from "./constants/Config";
// import { Route } from "react-router";
const routes = [
  {
    path: Config.PAGE_INDEX,
    exact: true,
    main: () => <Index />,
  },
  {
    path: Config.PAGE_PRODUCT,
    exact: true,
    main: () => <ListProduct />,
  },
  {
    path: Config.PAGE_DETAIL_PRODUCT + "/:slug",
    exact: true,
    main: ({ match }) => <DetailProduct match={match} />,
  },
  {
    path: Config.PAGE_CART,
    exact: false,
    main: () => <Cart />,
  },
  {
    path: Config.PAGE_PAYMENT,
    exact: false,
    main: () => <Payment />,
  },
  {
    path: Config.PAGE_ABOUT,
    exact: false,
    main: () => <About />,
  },
  {
    path: Config.PAGE_NEWS,
    exact: false,
    main: () => <News />,
  },
  {
    path: Config.PAGE_CONTACT,
    exact: false,
    main: () => <Contact />,
  },
  {
    path: Config.PAGE_SEARCH,
    exact: true,
    main: () => <Search />,
  },
  {
    path: "",
    exact: true,
    main: () => <NotFound />,
  },
];

export default routes;
