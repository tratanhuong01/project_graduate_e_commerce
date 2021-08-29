import React from "react";

function Star(props) {
  //
  const { fontSize, star } = props;
  const arrayDemo = [1, 2, 3, 4, 5];
  const string = (item) => {
    if (item <= star) return "bx bxs-star";
    else if (star > item - 1 && star < item) return "bx bxs-star-half";
    else return "bx bx-star";
  };
  const showStars = arrayDemo.map((item, index) => {
    return (
      <span key={index} className={`${string(item)} mr-0.5 ${fontSize}`}></span>
    );
  });
  //
  return <>{showStars}</>;
}

export default Star;
