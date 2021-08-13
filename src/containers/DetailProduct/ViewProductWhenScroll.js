import React from "react";
import Left from "../../components/DetailProduct/ViewProductWhenScroll/Left";
import Right from "../../components/DetailProduct/ViewProductWhenScroll/Right";

function ViewProductWhenScroll(props) {
  //
  const { products } = props;
  //
  return (
    <div
      className="w-full sticky top-0 bg-white z-50 shadow-lg border-b-2 
        border-solid border-gray-100 view__detail__product__scrollbar"
    >
      <div className="xl:w-4/5 md:bg-transparent mx-auto flex p-4">
        <Left products={products} />
        <Right products={products} />
      </div>
    </div>
  );
}

export default ViewProductWhenScroll;
