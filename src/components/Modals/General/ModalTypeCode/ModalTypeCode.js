import React, { useEffect, useState } from "react";
import ModalWrapper from "../../../../containers/ModalWrapper";
import Button from "../Button/Button";

function ModalTypeCode(props) {
  //
  const [codeVerify, setCodeVerify] = useState("");
  const [message, setMessage] = useState(null);
  const { data, code } = props;
  let [time, setTime] = useState("");
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    //
    let time = 120;
    let interval = setInterval(() => {
      time--;
      let min = parseInt(time / 60);
      let sec = time - min * 60;
      setTime(`${min < 10 ? `0${min}` : min} : ${sec < 10 ? `0${sec}` : sec}`);
      if (time === 0) {
        setTime("Hết hạn");
        clearInterval(interval);
        setDisabled(false);
      }
    }, 1000);
    return function cleanup() {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const verify = () => {
    if (code.toString() === codeVerify.toString()) {
      setMessage(null);
      alert("Register Succeess !!");
    } else {
      if (codeVerify.length === 0)
        setMessage("Mã xác nhận không được để trống !!");
      else setMessage("Mã xác nhận không chính xác . Thử lại !!");
    }
  };
  //
  return (
    <ModalWrapper
      title="Xác nhận tài khoản"
      className="w-11/12 absolute top-1/2 left-1/2 py-4 opacity-100 bg-white z-50 border-2 border-solid 
    border-gray-300 sm:w-4/5 sm:mt-12 lg:w-3/5 xl:w-2/5 xl:mt-4 transform -translate-x-1/2 -translate-y-1/2 
    rounded-lg"
    >
      <div className="w-full px-4">
        <div className="mx-auto my-4">
          <p className="">
            Hệ thống đã gửi một mã gồm 8 chữ số đến
            <span className="font-bold"> {data} </span>
            .Bạn cần nhập đúng mã xác nhận từ email hoặc số điện thoại này để
            kích hoạt tài khoản.
          </p>
          <input
            className={`w-full p-4 my-4 border-2 border-solid rounded-full 
            ${
              message === null
                ? "border-gray-400 text-black"
                : "border-red-500 text-red-500"
            } `}
            type="text"
            placeholder="Nhập mã có 8 chữ số.."
            onChange={(event) => setCodeVerify(event.target.value)}
            value={codeVerify}
          />
          <ul className="w-full my-2 mx-4">
            <li className="w-full text-red-500 font-semibold">{message}</li>
          </ul>
        </div>
        <hr />
        <div className="w-full text-right">
          <span className="float-left font-semibold text-xm mt-3">
            {`Thời gian gửi lại :  ${time}`}
          </span>
          <Button
            backgroundColor="bg-gray-500"
            color="text-white"
            label="Gửi lại"
            addClass="mr-4"
            disabled={disabled}
          />
          <Button
            onClick={() => verify()}
            backgroundColor="bg-organce"
            color="text-white"
            label="Xác nhận"
            addClass=""
          />
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalTypeCode;
