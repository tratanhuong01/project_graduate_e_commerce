import React from "react";
import Customer from "../../components/Admin/Index/IndexRight/Category/Customer/Customer";
import Dashboard from "../../components/Admin/Index/IndexRight/Category/Dashboard/Dashboard";
import Bill from "../../components/Admin/Index/IndexRight/Category/Bill/Bill";
import Product from "../../components/Admin/Index/IndexRight/Category/Product/Product";
import Sale from "../../components/Admin/Index/IndexRight/Category/Sale/Sale";
import * as Types from "../../constants/admin/ActionTypes";

const initialState = {
  data: <Dashboard />,
  loading: true,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.HANDLE_DASHBOARD:
      state.data = <Dashboard />;
      state.loading = true;
      return { ...state };
    case Types.HANDLE_CUSTOMER:
      state.data = <Customer />;
      state.loading = true;
      return { ...state };
    case Types.HANDLE_PRODUCT:
      state.data = <Product />;
      state.loading = true;
      return { ...state };
    case Types.HANDLE_SALE:
      state.data = <Sale />;
      state.loading = true;
      return { ...state };
    case Types.HANDLE_BILL:
      state.data = <Bill />;
      state.loading = true;
      return { ...state };
    default:
      return state;
  }
};
export default myReducer;
