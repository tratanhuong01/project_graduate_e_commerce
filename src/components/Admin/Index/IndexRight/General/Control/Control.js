import React from "react";
import DataFilterOrder from "../DataFilterOrder/DataFilterOrder";
import Filter from "./Filter/Filter";
import OrderBy from "./OrderBy/OrderBy";
import ConfigAdmin from "../../../../../../ConfigAdmin";
function Control(props) {
  //
  const { type } = props;
  let data = null;
  switch (type) {
    case "customer":
      data = ConfigAdmin.customer;
      break;
    case "product":
      data = ConfigAdmin.product;
      break;
    default:
      break;
  }
  //
  return (
    <>
      <div className="w-full flex py-3">
        <Filter filter={data.filter} />
        <OrderBy orderBy={data.orderBy} />
      </div>
      <DataFilterOrder />
    </>
  );
}

export default Control;
