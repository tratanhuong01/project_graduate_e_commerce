import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../../../../actions/modal/index";

function FooterFormAddress(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full px-2.5 flex justify-end mt-5 mb-1">
      <button
        type="button"
        className="bg-organce opacity-50 px-4 py-2 font-semibold 
        text-white border-2 border-solid border-organce"
      >
        Thêm địa chỉ
      </button>
      <button
        onClick={() => dispatch(modalsAction.closeModal())}
        type="button"
        className="px-4 py-2 font-semibold text-gray-600 border-2 border-solid border-gray-300 ml-5"
      >
        Trở về
      </button>
    </div>
  );
}

export default FooterFormAddress;
