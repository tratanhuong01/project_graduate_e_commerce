import React from "react";
import ItemNews from "../NewsRight/ItemNews/ItemNews";

function NewsRight(props) {
  //
  const { news, subClass } = props;
  //
  return (
    <div className={`w-full mt-2 flex flex-wrap items-center ${subClass}`}>
      {news.map((newData, index) => {
        return <ItemNews newData={newData} key={index} />;
      })}
    </div>
  );
}

export default NewsRight;
