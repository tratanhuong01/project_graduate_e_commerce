import React from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../../actions/modal/index";

function CloseModal(props) {
  //
  const dispatch = useDispatch();
  const { fixed } = props;
  //
  return (
    <span
      onClick={() => dispatch(modalsAction.closeModal())}
      className={`rounded-full w-10 h-10 font-bold text-xl bg-gray-300 cursor-pointer ${
        fixed ? "z-main" : "z-50"
      }
      hover:bg-gray-500 hover:text-white flex justify-center items-center absolute ${
        fixed ? "-top-2 right-2" : "top-3 right-3"
      } `}
    >
      &times;
    </span>
  );
}

export default CloseModal;
