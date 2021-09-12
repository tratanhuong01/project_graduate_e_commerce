import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import * as ordersAction from "../../../../actions/order/index";
// import api from "../../../../Utils/api";

function ApplyCode(props) {
  //
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [code, setCode] = useState("");
  const [error, setError] = useState(null);
  const appleCode = async () => {
    setError("");
    dispatch(() => "");
  };
  //
  return loading ? (
    <div className="w-full p-3 flex items-center justify-center">
      <i className="fas fa-circle-notch fa-spin text-4xl text-organce"></i>
    </div>
  ) : (
    <div className="py-3 w-full flex">
      <div className="w-full flex mb-1">
        <input
          type="text"
          className="w-3/4 mt-2 p-3 rounded-l-lg border-2 border-solid 
       border-gray-100 dark:bg-dark-third dark:border-dark-third"
          placeholder="Nhập mã ưu đãi (Nếu có)..."
          onChange={(event) => setCode(event.target.value)}
          value={code}
        />
        <button
          onClick={() => {
            appleCode();
            setLoading(false);
          }}
          type="button"
          className="w-1/4 p-3 mt-2 rounded-r-lg bg-organce text-white 
          font-semibold  border-2 border-solid border-organce shadow-lg"
        >
          Áp dụng
        </button>
      </div>
      {error && <p className="text-red-500 font-semibold mb-1">{error}</p>}
    </div>
  );
}

export default ApplyCode;
