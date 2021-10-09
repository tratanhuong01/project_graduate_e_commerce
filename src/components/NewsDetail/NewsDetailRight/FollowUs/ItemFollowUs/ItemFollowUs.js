import React, { useEffect, useRef } from "react";

function ItemFollowUs(props) {
  //
  const { icon, color, number, ins } = props;
  const ref = useRef(null);
  useEffect(() => {
    //
    if (ref && ref.current) {
      ref.current.style.height = ref.current.offsetWidth + "px";
    }
    //
  }, [ref]);
  //
  return (
    <div
      ref={ref}
      className={` mx-2 mb-4 flex justify-center rounded-lg 
      items-center flex-col text-white font-semibold ${ins}`}
      style={{ ...color, width: "calc(33.3% - 16px)" }}
    >
      <span className={`${icon} text-2xl mb-2`}></span>
      <span className="text-xm">{number}</span>
    </div>
  );
}

export default ItemFollowUs;
