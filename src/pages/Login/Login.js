import React from "react";
import MainLogin from "../../containers/Login/MainLogin";
import useResetPage from "../../hook/useResetPage";

function Login(props) {
  //
  useResetPage("Đăng nhập");
  //
  return <MainLogin />;
}

export default Login;
