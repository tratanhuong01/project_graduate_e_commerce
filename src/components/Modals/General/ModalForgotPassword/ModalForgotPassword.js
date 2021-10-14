import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ModalWrapper from "../../../../containers/ModalWrapper";
import Button from "../Button/Button";
import * as modalsAction from "../../../../actions/modal/index";
import * as usersAction from "../../../../actions/user/index";
import api from "../../../../Utils/api";
function ModalForgotPassword({ user }) {
  //
  const dispatch = useDispatch();
  const [message, setMessage] = useState(null);
  //
  return (
    <ModalWrapper
      title="Lấy lại tài khoản"
      className="w-11/12 absolute top-1/2 left-1/2 py-4 opacity-100 bg-white z-50 border-2 border-solid 
    border-gray-300 dark:border-dark-third shadow-lg sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-2/5 xl:mt-4 transform -translate-x-1/2 -translate-y-1/2 rounded-lg"
    >
      <div className="w-full flex px-4">
        <div
          className=" border-2 border-solid border-gray-200"
          style={{ width: "70%" }}
        >
          <p className="m-2.5">
            <b>Bạn muốn nhận mã để đặt lại tài khoản bằng cách nào ?</b>
          </p>
          <div className="w-full flex py-2.5">
            <input type="radio" name="choose" className="m-2.5" />
            <div className="px-2.5">
              <div className="my-1 font-semibold">
                <i className="fas fa-envelope-open-text mr-3"></i>Gởi mã qua
                email
              </div>
              <p className="">{user.email}</p>
            </div>
          </div>
          <div className="w-full flex py-2.5">
            <input type="radio" name="choose" className="m-2.5" />
            <div className="px-2.5">
              <div className="my-1 font-semibold">
                <i className="fas fa-mobile-alt mr-3"></i>Gởi mã qua số điện
                thoại
              </div>
              <p className="">{user.phone}</p>
            </div>
          </div>
        </div>
        <div className="text-center py-4 px-2 " style={{ width: "30%" }}>
          <img className="w-16 h-16 mx-auto" src={user.avatar} alt="" />
          <br />
          <b>{`${user.firstName} ${user.lastName}`}</b>
          <br />
          <span>Người dùng</span>
        </div>
      </div>
      {message && (
        <p className="w-4/5 text-red-600 font-semibold mx-auto py-4 px-4">
          {message}
        </p>
      )}
      <hr className="mt-4" />
      <div className="text-right px-4">
        <Button
          backgroundColor="bg-gray-500 hidden "
          color="text-white"
          label="Gửi phản hồi"
          addClass="float-left"
        />
        <Button
          onClick={() => dispatch(modalsAction.closeModal())}
          backgroundColor="bg-gray-500"
          color="text-white"
          label="Hủy"
          addClass="mr-3"
        />
        <Button
          onClick={async () => {
            dispatch(modalsAction.onLoadingModal());
            const result = await api(
              `getListPasswordReset`,
              "POST",
              user.id,
              null
            );
            if (result.data.length < 5) {
              await dispatch(
                usersAction.sendCodeRegister(
                  {
                    emailOrPhone: "Email",
                    user: user,
                  },
                  true
                )
              );
            } else
              setMessage(
                "Bạn đã yêu cầu gửi mã quá nhiều lần vui lòng thử lại sau !!"
              );
            dispatch(modalsAction.offLoadingModal());
          }}
          backgroundColor="bg-organce"
          color="text-white"
          label="Tiếp tục"
        />
      </div>
    </ModalWrapper>
  );
}

export default ModalForgotPassword;
