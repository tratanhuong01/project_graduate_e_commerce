import React, { Component } from "react";

class ApplyCode extends Component {
  render() {
    return (
      <div className="py-3 w-full flex">
        <input
          type="text"
          name=""
          className="w-3/4 mt-2 p-3 rounded-l-lg border-2 border-solid 
            border-gray-100"
          placeholder="Nhập mã ưu đãi (Nếu có)..."
          id=""
        />
        <button
          type="button"
          className="w-1/4 p-3 mt-2 rounded-r-lg bg-organce text-white 
            font-semibold  border-2 border-solid border-organce shadow-lg"
        >
          Áp dụng
        </button>
      </div>
    );
  }
}

export default ApplyCode;
