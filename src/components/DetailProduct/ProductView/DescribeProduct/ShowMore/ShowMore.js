import React from "react";

function ShowMore(props) {
  //
  const { minHeight, setMinHeight } = props;
  //
  return (
    <div
      className="w-full pt-2 flex justify-center"
      style={{ transform: "translateY(-20px)" }}
    >
      <button
        onClick={() => {
          setMinHeight(minHeight === null ? { maxHeight: 167 } : null);
          window.scrollTo(0, 777);
        }}
        className="px-5 py-2.5 rounded-full border-2 border-solid font-semibold 
        border-gray-500 justify-center flex items-center hover:bg-gray-300"
      >
        {minHeight === null ? (
          <>
            Thu gọn <span className="bx bx-chevron-up ml-1"></span>
          </>
        ) : (
          <>
            Xem thêm <span className="bx bx-chevron-down ml-1"></span>{" "}
          </>
        )}
      </button>
    </div>
  );
}

export default ShowMore;
