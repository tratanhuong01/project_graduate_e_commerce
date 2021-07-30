import React from "react";
function Search(props) {
  //
  //
  return (
    <>
      <div className="w-full rouned-full relative">
        <input
          type="text"
          placeholder="Tìm kiếm..."
          className="w-full py-2.5 px-4 rounded-full border-2 border-solid border-black"
        />
        <i className="bx bx-search text-3xl absolute right-3 top-2 cursor-pointer"></i>
      </div>
    </>
  );
}

export default Search;
