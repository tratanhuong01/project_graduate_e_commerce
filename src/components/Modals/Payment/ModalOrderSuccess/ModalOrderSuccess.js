import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ModalWrapper from "../../../../containers/ModalWrapper";

function ModalOrderSuccess(props) {
  //
  const [time, setTime] = useState(5);
  const history = useHistory();
  useEffect(() => {
    //
    if (time === 0) {
      history.push("");
      return;
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time]);
  //
  return (
    <ModalWrapper
      className="w-11/12 xl:w-5/12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
    rounded-lg z-50 animate__animated animate__fadeIn bg-white overflow-y-auto scrollbar-css 
    dark:bg-dark-main"
      style={{ maxHeight: "70vh", height: "70vh" }}
    >
      <div className="w-full flex flex-col -mt-5 items-center justify-center">
        <img
          src="https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-congrats-speech-bubble-loudspeaker-vector-id1197835415?b=1&k=20&m=1197835415&s=612x612&w=0&h=hHTEMcbYjLkkCYn1bpykolM_uTNnbAB2WbvDxqRvCEk="
          alt=""
          className="w-2/3 object-cover"
        />
        <div className="w-2/3 mx-auto text-center font-semibold text-green-700 mb-3 text-2xl">
          Đơn hàng của bạn đã đặt thành công !
        </div>
        <div className="w-4/5 mx-auto text-center font-semibold text-gray-500 text-sm">
          <i className="fas fa-exclamation-triangle mr-2 text-yellow-500 text-sm"></i>
          Luư ý : Vui lòng giữ liên lạc để bên giao hàng có thể giao hàng đúng
          tiến độ cũng như không ảnh hưởng đến công việc của bên giao hàng cũng
          như khách hàng và bên cửa hàng.
        </div>
        <div className="font-semibold text-xl text-center mt-5 text-gray-700">
          Hệ thống sẽ điều hướng về trang chủ sau {time} giây
          <br />
          <i className="fas fa-sync fa-spin text-2xl text-organce my-2"></i>
        </div>
      </div>
    </ModalWrapper>
  );
}

export default ModalOrderSuccess;
