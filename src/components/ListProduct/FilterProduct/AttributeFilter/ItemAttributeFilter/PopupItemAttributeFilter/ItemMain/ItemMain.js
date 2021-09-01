import React from "react";

function ItemMain(props) {
  //
  const { list, name } = props;
  //
  return (
    <div className="w-full flex flex-wrap">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="px-2 py-1 m-2 rounded-full p-1 border-2 border-solid border-gray-300 hover:border-organce 
            text-sm"
          >
            {item[name]}
          </div>
        );
      })}
    </div>
  );
}

export default ItemMain;
