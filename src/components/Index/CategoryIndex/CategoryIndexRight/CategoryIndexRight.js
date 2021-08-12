import React from "react";

function CategoryIndexRight(props) {
  return (
    <div
      className="w-3/4 px-2 relative w-full flex"
      style={{ height: 384, maxHeight: 384 }}
    >
      <div className="w-12 h-12 bg-white bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3 z-20 flex justify-center items-center">
        <span className="bx bx-chevron-left text-4xl flex"></span>
      </div>
      <img
        src="https://www.tvadsongs.uk/wp-content/uploads/2018/06/twilight-huawei-p20-pro-8211-let-me-see-you-move-1NoTukEc0Xs.jpg"
        alt=""
        className="w-full object-cover h-full"
      />
      <div className="w-12 h-12 bg-white bg-opacity-50 rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 z-20 flex justify-center items-center">
        <span className="bx bx-chevron-right text-4xl flex"></span>
      </div>
    </div>
  );
}

export default CategoryIndexRight;
