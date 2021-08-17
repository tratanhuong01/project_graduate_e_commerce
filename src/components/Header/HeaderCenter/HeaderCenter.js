import React, { useRef, useState } from "react";
import ContentEditable from "react-contenteditable";
function HeaderCenter(props) {
  //
  const [show, setShow] = useState(false);
  const text = useRef("");
  //
  return (
    <div className="hidden md:flex md:w-8/12 lg:w-3/5 items-center justify-end">
      <div
        className="md:w-full md:mx-4 lg:mx-0 lg:w-10/12 flex item-center border-2 border-solid 
      border-organce rounded-full"
      >
        <ContentEditable
          placeholder="Nhập tên sản phẩm..."
          className="md:w-8/12 p-2.5 text-gray-500"
          html={text.current}
          onKeyDown={(e) => {
            e.keyCode === 13 && e.preventDefault();
          }}
        />
        <div
          onClick={() => setShow(!show)}
          className="w-52 lg:w-48 py-2.5 px-1 border-solid border-gray-200 border-l-2 border-r-2 flex font-semibold justify-center items-center relative cursor-pointer"
        >
          <div>Tất cả danh mục</div>
          <span className="bx bx-chevron-down ml-3"></span>
          {show ? (
            <div className="w-full absolute top-full left-0 bg-white z-50">
              <div className="w-full p-2 border-solid border-gray-200 border-b-2 border-t-2 flex font-semibold justify-center items-center cursor-pointer">
                Điện thoại
              </div>
              <div className="w-full p-2 border-solid border-gray-200 border-b-2 border-t-2 flex font-semibold justify-center items-center cursor-pointer">
                Đồng hồ
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="w-1/12 flex items-center justify-center cursor-pointer">
          <span className="bx bx-search text-2xl text-organce px-2"></span>
        </div>
      </div>
    </div>
  );
}

export default HeaderCenter;
