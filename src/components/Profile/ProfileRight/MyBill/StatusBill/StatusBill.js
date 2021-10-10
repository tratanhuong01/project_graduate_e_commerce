import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_LOADING_BILL_USER } from "../../../../../constants/ActionTypes";
import ItemStatusBill from "./ItemStatusBill/ItemStatusBill";

function StatusBill(props) {
  //
  const [show, setShow] = useState(false);
  const { status, data, setData } = props;
  const dispatch = useDispatch();
  //
  return (
    <>
      <div
        id="status__bill__"
        className="w-full text-gray-600  dark:text-white  shadow-md hidden sm:flex"
      >
        {status.map((item, index) => {
          return (
            <ItemStatusBill
              onClick={() => {
                dispatch({ type: SET_LOADING_BILL_USER, status: true });
                setData(item);
              }}
              active={data.type === item.type ? true : false}
              item={item}
              key={index}
            />
          );
        })}
      </div>
      <div
        onClick={() => setShow(!show)}
        className="w-full px-3 py-2 rounded-lg border-2 border-solid border-gray-300 
        font-semibold text-gray-800 dark:text-white relative cursor-pointer sm:hidden"
      >
        {data.name}
        <span className="bx bx-chevron-down text-xl absolute top-2 right-2"></span>
        {show && (
          <div className="w-full absolute top-full my-1 bg-white left-0 z-30">
            {status.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setData(item);
                    setShow(false);
                  }}
                  key={index}
                  className="w-full p-2 hover:bg-gray-100"
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default StatusBill;
