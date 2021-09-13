import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as billsAction from "../../../../../actions/bill/index";

function InputSearchBill(props) {
  //
  const { data } = props;
  const { user } = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  //
  return (
    <div className="w-full relative">
      <input
        type="text"
        placeholder="Tìm kiếm theo mã đơn hàng hoặc tên sản phẩm"
        className="w-full pl-10 p-2.5 my-4 bg-gray-100 focus:border-blue-500 border-2 border-solid  dark:bg-dark-third border-gray-200 "
        onKeyUp={(event) => {
          if (event.keyCode === 13 && event.target.value.length > 0)
            if (event.target.value.length === 0)
              dispatch(
                billsAction.loadBillsUserRequest({
                  user,
                  type: data.type,
                  index: 0,
                  keyword,
                })
              );
            else
              dispatch(
                billsAction.searchBillRequest({
                  user,
                  type: data.type,
                  index: 0,
                })
              );
        }}
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        spellCheck={false}
      />
      <span className="bx bx-search text-2xl absolute top-6 left-2 text-gray-600"></span>
    </div>
  );
}

export default InputSearchBill;
