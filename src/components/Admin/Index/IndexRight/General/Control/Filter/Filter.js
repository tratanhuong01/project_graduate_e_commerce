import React, { useState } from "react";

function Filter(props) {
  //
  const { filter } = props;
  const [name, setName] = useState(filter[0].data[0].name);
  const [data, setData] = useState(filter[0]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const showDataLeft = filter.map((item, index) => {
    return (
      <div
        onClick={() => {
          setName(item.data[0].name);
          setData(item);
          setShowLeft(false);
        }}
        className="p-2 w-full"
        key={index}
      >
        {item.name}
      </div>
    );
  });
  const showDataRight = data.data.map((item, index) => {
    return (
      <div
        onClick={() => {
          setName(item.name);
          setShowRight(false);
        }}
        className="w-full p-2"
        key={index}
      >
        {item.name}
      </div>
    );
  });
  //
  return (
    <div className="w-1/2 flex">
      <p className="text-xm font-semibold py-3 mr-4 flex items-center">
        Bộ Lọc
      </p>
      <div
        onClick={() => setShowLeft(!showLeft)}
        className="w-48 p-3 mr-5 font-semibold flex bg-white cursor-pointer relative"
      >
        <p className="items-center">{data.name}</p>
        <i className="fas fa-caret-down absolute right-3 top-4"></i>
        {showLeft && (
          <div
            className="w-48 bg-white border-2 border-solid border-gray-200 p-1 
          font-semibold absolute top-full left-0 shadow-lg"
          >
            {showDataLeft}
          </div>
        )}
      </div>
      <div
        onClick={() => setShowRight(!showRight)}
        className="w-48 p-3 font-semibold flex bg-white cursor-pointer relative"
      >
        <p className="items-center">{name}</p>
        <i className="fas fa-caret-down absolute right-3 top-4"></i>
        {showRight && (
          <div
            className="w-48 bg-white border-2 border-solid border-gray-200 p-1 
            font-semibold absolute top-full left-0 shadow-lg"
          >
            {showDataRight}
          </div>
        )}
      </div>
      <p className="text-xm font-semibold py-3 ml-8 text-center flex items-center">
        Sắp xếp
      </p>
    </div>
  );
}

export default Filter;
