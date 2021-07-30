import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modal/index";

function CloseModal(props) {
  //
  const dispatch = useDispatch();
  //
  return (
    <span
      onClick={() => dispatch(modalsAction.closeModal())}
      className="rounded-full py-0.5 pb-1.5 px-2.5 font-bold text-xl bg-gray-300 cursor-pointer
          hover:bg-gray-500 hover:text-white flex justify-center items-center absolute top-3 right-3"
    >
      &times;
    </span>
  );
}

export default CloseModal;
