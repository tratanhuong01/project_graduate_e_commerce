import React from "react";

function Star(props) {
  //
  const { fontSize } = props;
  //
  return (
    <>
      <span className={`bx bxs-star mr-0.5 ${fontSize}`}></span>
      <span className={`bx bxs-star mr-0.5 ${fontSize}`}></span>
      <span className={`bx bxs-star mr-0.5 ${fontSize}`}></span>
      <span className={`bx bxs-star mr-0.5 ${fontSize}`}></span>
      <span className={`bx bxs-star-half mr-0.5 ${fontSize}`}></span>
    </>
  );
}

export default Star;
