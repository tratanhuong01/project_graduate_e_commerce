import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import FormLogin from "../../components/Modals/General/ModalLogin/FormLogin/FormLogin";
import LoginWith from "../../components/Modals/General/ModalLogin/LoginWith/LoginWith";
function MainLogin(props) {
  //
  const user = useSelector((state) => state.user);
  //
  return (
    <div
      className="w-full bg-organce my-5 flex items-center"
      style={{ height: "68vh" }}
    >
      {user ? (
        <Redirect to="" />
      ) : (
        <div className="xl:w-4/5 w-full flex flex-col lg:flex-row mx-auto px-4 justify-center">
          <div className="w-1/3 mx-auto px-5 h-full max-h-full bg-white pt-1 pb-8">
            <p className="w-full my-6 text-2xl text-center font-bold">
              Đăng nhập
            </p>
            <FormLogin />
            <LoginWith />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainLogin;
