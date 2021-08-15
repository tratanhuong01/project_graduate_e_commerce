import React from "react";

function TypeContentComment(props) {
  return (
    <div className="w-11/12 ml-auto hidden">
      <div className="w-full flex my-3">
        <img
          src="http://www.thetahmid.com/themes/tennews-v1.1/images/comm-1.jpg"
          alt=""
          className="w-12 h-12 rounded-full mr-4"
        />
        <input
          type="text"
          className="w-full p-2 rounded-full border-2 border-solid 
            border-gray-200"
          placeholder="Nhập nội dung..."
        ></input>
        <button
          className="w-48 md:w-36 flex font-semibold px-2 ml-3 py-1.5 text-white bg-organce-second 
             hover:bg-organce rounded-lg text-sm items-center justify-center"
        >
          <span className="bx bx-send mr-3 text-xl"></span> Bình luận
        </button>
      </div>
    </div>
  );
}

export default TypeContentComment;
