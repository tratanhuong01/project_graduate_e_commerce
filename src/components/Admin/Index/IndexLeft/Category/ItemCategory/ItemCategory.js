import React, { useState } from "react";

function ItemCategory(props) {
  //
  const [show, setShow] = useState({
    icon: "bx bx-chevron-right",
    status: false,
  });
  const { id, item, setCategoryCurrent } = props;
  //
  return (
    <>
      <li
        onClick={() => {
          setCategoryCurrent(item.id);
          item.child.length > 0 &&
            setShow({
              icon: show.status ? "bx bx-chevron-right" : "bx bx-chevron-down",
              status: !show.status,
            });
        }}
        className={`w-full border-solid cursor-pointer flex pl-5 h-12 my-1 items-center 
        rounded-lg relative font-medium ${
          item.id === id
            ? "border-l-4 border-gray-200 bg-gray-200 text-gray-700"
            : "border-white text-gray-700 hover:bg-gray-200"
        }`}
      >
        <span className={`${item.icon} text-xl mr-3 flex `}></span>
        <span className="hidden lg:flex">{item.name}</span>
        <span
          className={`${show.icon} absolute top-3.5 text-xl right-3`}
        ></span>
      </li>
      {show.status && (
        <div className="w-full hidden lg:block">
          {item.child.length > 0 &&
            item.child.map((item, index) => {
              return (
                <div
                  onClick={() => ""}
                  className="w-full text-gray-700 flex my-0.5 h-11 items-center cursor-pointer"
                  key={index}
                >
                  <span
                    className={`bx bx-radio-circle text-xm flex mx-5`}
                  ></span>
                  <span className="flex">{item.name}</span>
                </div>
              );
            })}
        </div>
      )}
    </>
  );
}

export default ItemCategory;
