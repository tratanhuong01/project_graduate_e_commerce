import React from "react";

function Sale(props) {
  //
  const { sale } = props;
  //
  return (
    <span
      className="bg-red-500 font-semibold text-xs p-1.5 cursor-pointer absolute
        top-4 -left-1 rounded-r-2xl z-10 text-white"
    >
      -{sale} %
    </span>
  );
}

export default Sale;
