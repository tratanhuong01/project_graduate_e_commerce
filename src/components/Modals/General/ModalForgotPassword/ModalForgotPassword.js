import React from "react";
import CloseModal from "../../../General/CloseModal/CloseModal";
import Button from "../Button/Button";

function ModalForgotPassword(props) {
  return (
    <div
      className="w-11/12 absolute top-1/2 left-1/2 py-4 px-4 opacity-100 bg-white z-50 border-2 border-solid 
    border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-2/5 xl:mt-4 transform -translate-x-1/2 -translate-y-1/2 
    rounded-lg z-50"
    >
      <div className="w-full">
        <div className="w-full text-center">
          <p className="text-2xl font-semibold p-2.5 ">Lấy lại tài khoản</p>
          <CloseModal />
        </div>
      </div>
      <div className="w-full flex">
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
                <i className="fas fa-envelope-open-text"></i>Gởi mã qua email
              </div>
              <p className="">tratanhuong01@gmail.com</p>
            </div>
          </div>
          <div className="w-full flex py-2.5">
            <input type="radio" name="choose" className="m-2.5" />
            <div className="px-2.5">
              <div className="my-1 font-semibold">
                <i className="fas fa-mobile-alt"></i>Gởi mã qua số điện thoại
              </div>
              <p className="">0354114665</p>
            </div>
          </div>
        </div>
        <div className="text-center py-4 px-2 " style={{ width: "30%" }}>
          <img
            className="w-16 h-16 mx-auto"
            src="/images/products/2.png"
            alt=""
          />
          <br />
          <b>Trà Hưởng</b>
          <br />
          <span>Người dùng</span>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="text-right">
        <Button
          backgroundColor="bg-gray-500"
          color="text-white"
          label="Gửi phản hồi"
          addClass="float-left"
        />
        <Button
          backgroundColor="bg-organce"
          color="text-white"
          label="Tiếp tục"
          addClass="mr-3"
        />
        <Button
          backgroundColor="bg-gray-500"
          color="text-white"
          label="Không phải bạn ?"
          addClass=""
        />
      </div>
    </div>
  );
}

export default ModalForgotPassword;
