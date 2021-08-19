import React from "react";
import { Route, Switch } from "react-router-dom";
import * as Config from "../../../constants/Config";
import DetailBill from "./DetailBill/DetailBill";
import Address from "./MyAccount/Address/Address";
import Bank from "./MyAccount/Bank/Bank";
import ChangePassword from "./MyAccount/ChangePassword/ChangePassword";
import MyAccount from "./MyAccount/MyAccount";
import MyBill from "./MyBill/MyBill";
import MyNotify from "./MyNotify/MyNotify";

function ProfileRight(props) {
  //
  const routesChild = [
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_INFO}`,
      exact: true,
      component: () => <MyAccount />,
    },
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BANK}`,
      exact: true,
      component: () => <Bank />,
    },
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_ADDRESS}`,
      exact: true,
      component: () => <Address />,
    },
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_CHANGE_PASSWORD}`,
      exact: true,
      component: () => <ChangePassword />,
    },
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_BILL}`,
      exact: true,
      component: () => <MyBill />,
    },
    {
      to: `${Config.PAGE_PROFILE_USER}/${Config.PROFILE_NOTIFY}`,
      exact: true,
      component: () => <MyNotify />,
    },
  ];
  //
  return (
    <div className="w-3/4 ">
      <DetailBill />
    </div>
    // <div className="w-3/4">
    //   <Switch>
    //     {routesChild.map((route, index) => {
    //       return (
    //         <Route
    //           key={index}
    //           path={route.to}
    //           exact={route.exact}
    //           component={route.component}
    //         />
    //       );
    //     })}
    //   </Switch>
    // </div>
  );
}

export default ProfileRight;
