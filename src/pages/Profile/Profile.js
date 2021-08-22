import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import MainProfile from "../../containers/Profile/MainProfile";

function Profile(props) {
  //
  const user = useSelector((state) => state.user);
  const { slug } = props.match.match.params;
  useEffect(() => {
    //
    document.title = "Tài khoản của tôi";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {}, [user]);
  //
  return !user ? <Redirect to=""></Redirect> : <MainProfile slug={slug} />;
}

export default Profile;
