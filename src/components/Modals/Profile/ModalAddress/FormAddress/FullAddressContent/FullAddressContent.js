import React, { useEffect } from "react";

function FullAddressContent(props) {
  //
  const { check, setShow, content, reset } = props;
  useEffect(() => {}, [check]);
  //
  return (
    <>
      <div
        onClick={() => setShow()}
        className={`w-full p-2.5 border-2 border-solid border-gray-300 rounded-lg cursor-pointer ${
          check ? "text-gray-400" : "text-gray-800"
        }`}
      >
        {content}
        {!check && (
          <p
            className={"w-auto bg-white px-1 absolute -top-1.5 left-5 text-xs"}
          >
            Tỉnh/thành phố, Quận/huyện , Phường/xã
          </p>
        )}
      </div>
      <span
        className="bx bx-chevron-down absolute top-1.5 text-gray-600 
        right-5 text-2xl"
      ></span>
      <div
        onClick={() => {
          reset("");
          reset("");
          reset("");
          reset("");
        }}
        className="w-4 h-4 rounded-full bg-gray-500 text-white flex justify-center items-center text-sm  absolute top-4 right-14 cursor-pointer"
      >
        <i className="bx bx-x"></i>
      </div>
    </>
  );
}

export default FullAddressContent;
