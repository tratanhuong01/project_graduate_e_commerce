import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MainProfile from "../../containers/Profile/MainProfile";
import useResetPage from "../../hook/useResetPage";

function Profile(props) {
  //
  const user = useSelector((state) => state.user);
  const { slug } = props.match.match.params;
  useResetPage("Tài khoản của tôi");
  useEffect(() => {}, [user]);
  //
  return !user ? <Redirect to=""></Redirect> : <MainProfile slug={slug} />;
}

export default Profile;
