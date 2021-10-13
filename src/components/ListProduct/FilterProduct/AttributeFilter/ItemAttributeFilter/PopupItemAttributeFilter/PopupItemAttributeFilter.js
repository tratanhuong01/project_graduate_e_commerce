import React, { useEffect, useRef, useState } from "react";

function PopupItemAttributeFilter(props) {
  //
  const { index } = props;
  const ref = useRef(null);
  const [width, setWidth] = useState(500);
  useEffect(() => {
    //
    if (ref && ref.current) {
      if (
        ref.current.getBoundingClientRect().right / 5 >
        window.screen.width / 5
      )
        setWidth(350);
    }
    //
  }, []);
  //
  return (
    <div
      ref={ref}
      className="py-1 rounded-lg shadow-lg absolute top-full bg-white left-0 mt-3.5 dark:bg-dark-second "
      style={{
        width: width,
        boxShadow: "0 2px 20px rgb(0 0 0 / 50%)",
        zIndex: index,
      }}
    >
      <div className="arrow-up-popup dark:arrow-up-popup-second absolute"></div>
      <div
        className="w-full h-full relative overflow-y-auto scrollbar-css"
        style={{
          width: width,
          maxWidth: width,
          maxHeight: 150,
        }}
      >
        {props.children}
      </div>
    </div>
  );
}

export default PopupItemAttributeFilter;
