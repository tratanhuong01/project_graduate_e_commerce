import React from "react";

function ItemProductLoading(props) {
  return (
    <div className={"m-2 relative product__search flex-shrink-0 z-40"}>
      <div class="w-full relative md:h-80 xl:h-64 mx-auto item__category ">
        <img
          src="https://berryphan.com/wp-content/themes/fox/images/placeholder.jpg"
          class="w-full h-64 object-contain"
          alt=""
        />
      </div>
      <div className="h-12 w-full px-2 flex items-center">
        <span class="p-2 w-full my-6 linear-background rounded-sm"></span>
      </div>
      <p class="w-full flex items-center mt-2 justify-around">
        <span className="w-28 p-1 linear-background rounded-sm"></span>
        <span className="w-28 p-1 linear-background rounded-sm"></span>
      </p>
    </div>
  );
}

export default ItemProductLoading;
