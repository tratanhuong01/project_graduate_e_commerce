import React from "react";

function FooterContent(props) {
  return (
    <div className="w-full flex items-center my-6">
      <div
        className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
        style={{ backgroundColor: "#3b5998" }}
      >
        <span className="bx bxl-facebook-circle mr-2 text-2xl flex"></span>
        <span className="flex items-center text-sm font-semibold">
          Facebook
        </span>
      </div>
      <div
        className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
        style={{ backgroundColor: "#1da1f2" }}
      >
        <span className="bx bxl-twitter mr-2 text-2xl flex"></span>
        <span className="flex items-center text-sm">Twitter</span>
      </div>
      <div
        className=" px-2 py-1.5 text-white flex mr-3 cursor-pointer hover:bg-organce-important"
        style={{ backgroundColor: "#d34836" }}
      >
        <span className="bx bxl-google-plus mr-2 text-2xl flex"></span>
        <span className="flex items-center text-sm font-semibold">
          Google plus
        </span>
      </div>
    </div>
  );
}

export default FooterContent;
