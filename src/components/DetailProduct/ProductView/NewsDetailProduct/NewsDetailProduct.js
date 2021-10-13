import React from "react";
import ItemNews from "../../../Index/News/NewsRight/ItemNews/ItemNews";

function NewsDetailProduct(props) {
  return (
    <>
      <p className="font-bold text-2xl px-2 ">Tin tức nổi bật</p>
      <div className="w-full flex flex-wrap">
        <div className="item__news__detail py-0.5 px-2 mr-2 my-2 relative">
          <ItemNews />
        </div>
      </div>
    </>
  );
}

export default NewsDetailProduct;
