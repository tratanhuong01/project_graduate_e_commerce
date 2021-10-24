import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as profilesAction from "../../../../../../actions/profile/index";
import api from "../../../../../../Utils/api";
import * as userApi from "../../../../../../api/userApi";
import * as usersAction from "../../../../../../actions/user/index";

function SendCode({ onClick }) {
  return (
    <span
      onClick={() => typeof onClick === "function" && onClick()}
      className="ml-3 text-blue-500 font-semibold cursor-pointer"
    >
      Gửi mã
    </span>
  );
}

function EmailEdit({ email }) {
  //
  const { headers, user } = useSelector((state) => {
    return {
      headers: state.headers,
      user: state.user,
    };
  });
  const dispatch = useDispatch();
  const [verify, setVerify] = useState("");
  const [code, setCode] = useState(null);
  const [codeInput, setCodeInput] = useState("");
  const [emailNew, setEmailNew] = useState("");
  const [erorrCode, setErrorCode] = useState(null);
  const [erorrEmailNew, setErorrEmailNew] = useState(null);
  const sendCodeChangeData = async (email) => {
    let userClone = { ...user };
    userClone.email = email;
    const codeSent = await userApi.sendCodeEmail(userClone);
    await api(
      `passwordResets`,
      "POST",
      {
        id: null,
        passwordResetUser: user,
        code: codeSent.data,
        timeCreated: null,
      },
      null
    );
    setCode(codeSent.data);
  };

  const updateEmail = async () => {
    await api(`updateEmail/?idUser=${user.id}`, "PUT", emailNew, {
      ...headers,
      "Content-Type": "application/json",
    });
    dispatch(usersAction.loadUserRequest(headers));
  };

  const checkEmailIsset = async () => {
    const result = await api(`searchUserByEmailOrPhone`, "POST", emailNew, {
      ...headers,
      "Content-Type": "application/json",
    });
    if (result.data) setErorrEmailNew("Email đã được sử dụng !!");
    else {
      setErorrEmailNew(null);
      sendCodeChangeData(emailNew);
    }
  };

  //
  return (
    <div className="w-full text-gray-800 dark:text-white">
      <div className="w-full text-gray-800 dark:text-white">
        <p className="text-xl font-semibold">{email ? "Đổi" : "Thêm"} email</p>
        <p className="text-sm pb-6 ">
          Để đảm bảo tính bảo mật, vui lòng làm theo các bước sau để{" "}
          {email ? "đổi" : "thêm"} email
        </p>
        <hr className="mb-3" />
        <div className="w-full flex text-gray-600 dark:text-white my-5">
          <div className="w-1/4 flex self-center justify-end">Email</div>
          <div className="w-3/4 ml-6 flex flex-wrap items-center">
            {email && !verify ? (
              <>
                <span className="">{email}</span>
                {!code && (
                  <SendCode onClick={() => sendCodeChangeData(user.email)} />
                )}
              </>
            ) : (
              <>
                <input
                  type="text"
                  onChange={(event) => setEmailNew(event.target.value)}
                  className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
                  dark:bg-dark-third"
                  placeholder={`Email`}
                  value={emailNew}
                />
                <SendCode onClick={checkEmailIsset} />
                {erorrEmailNew && (
                  <p className="w-full font-semibold text-red-500 mt-3">
                    {erorrEmailNew}
                  </p>
                )}
              </>
            )}
          </div>
        </div>
        <div className="w-full flex text-gray-600 dark:text-white my-5">
          <div className="w-1/4 flex pt-3 justify-end">Mã xác nhận</div>
          <div className="w-3/4 ml-6 flex flex-wrap items-center">
            <input
              type="text"
              onChange={(event) => setCodeInput(event.target.value)}
              className="w-3/4 lg:w-1/2 p-2 border border-solid border-gray-300 dark:border-dark-third 
              dark:bg-dark-third"
              placeholder="Nhập mã xác nhận...."
              value={codeInput}
            />
            {erorrCode && (
              <p className="w-full font-semibold text-red-500 mt-3">
                {erorrCode}
              </p>
            )}
          </div>
        </div>
        <div className="w-full flex my-5 pl-6">
          <div className="w-1/4"></div>
          <div className="flex">
            <button
              disabled={verify ? (code ? false : true) : code ? false : true}
              onClick={() => {
                if (codeInput === "")
                  setErrorCode("Mã xác nhận không được trống !!");
                else if (codeInput !== code)
                  setErrorCode("Mã xác nhận không chính xác !!");
                if (codeInput === `${code}`) {
                  setErrorCode(null);
                  setCodeInput("");
                  setVerify(true);
                  setCode(null);
                }
                if (verify) {
                  updateEmail();
                }
              }}
              className={`${
                verify
                  ? code
                    ? "bg-organce"
                    : "bg-gray-700 cursor-not-allowed"
                  : "bg-gray-700 cursor-not-allowed"
              } px-6 py-2 my-3 text-white font-semibold`}
            >
              Xác nhận
            </button>
            <button
              onClick={() => dispatch(profilesAction.returnProfile())}
              className="bg-white  px-6 py-2 my-3 text-gray-600  font-semibold border-2 border-solid 
              border-gray-300 ml-5"
            >
              Trở về
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmailEdit;
