import React from "react";

function SliderProductLeft(props) {
  //
  const { current } = props;
  //
  return (
    <div
      className="hidden md:w-1/3 md:flex items-center animate__animated animate__fadeInLeft 
      stop__animation"
      style={{ animationDelay: "0.5s" }}
    >
      <img
        src={current.image}
        alt=""
        className="object-contain flex w-11/12"
        style={{ height: 450 }}
      />
    </div>
  );
}

export default SliderProductLeft;
