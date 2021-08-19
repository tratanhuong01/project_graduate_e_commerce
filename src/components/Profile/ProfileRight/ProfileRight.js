import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as Config from "../../../constants/Config";
import Address from "./MyAccount/Address/Address";
import Bank from "./MyAccount/Bank/Bank";
import ChangePassword from "./MyAccount/ChangePassword/ChangePassword";
import MyAccount from "./MyAccount/MyAccount";
import MyBill from "./MyBill/MyBill";
import MyNotify from "./MyNotify/MyNotify";
import * as profilesAction from "../../../actions/profile/index";

function ProfileRight(props) {
  //
  const dispatch = useDispatch();
  const { match } = props;
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
  const states = useSelector((state) => {
    return {
      profile: state.profile,
    };
  });
  const { profile } = states;
  useEffect(() => {
    dispatch(profilesAction.returnProfile());
  }, [match]);
  //
  return (
    <div className="w-3/4">
      {profile.data ? (
        profile.data
      ) : (
        <Switch>
          {routesChild.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.to}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
        </Switch>
      )}
    </div>
  );
}

export default ProfileRight;
