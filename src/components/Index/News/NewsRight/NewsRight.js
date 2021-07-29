import React from "react";
import ItemNews from "../NewsRight/ItemNews/ItemNews";

function NewsRight(props) {
  return (
    <div className="w-full sm:w-1.2 px-2">
      <ItemNews />
      <ItemNews />
      <ItemNews />
    </div>
  );
}

export default NewsRight;
