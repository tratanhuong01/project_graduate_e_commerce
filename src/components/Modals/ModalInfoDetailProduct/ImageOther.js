import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function ImageOther(props) {
  //
  const { images } = props;
  const [index, setIndex] = useState(0);
  useEffect(() => {}, [images]);
  //
  return (
    <div className="w-full flex flex-wrap h-full">
      {images && (
        <>
          <div className="w-full flex items-center mt-10">
            <div className="w-1/5 flex items-center justify-end pr-6">
              <div
                onClick={() => {
                  if (index === 0) return;
                  else {
                    setIndex(index - 1);
                    document.getElementById("slide").scrollLeft =
                      (index - 1) * document.getElementById("slide").scrollLeft;
                  }
                }}
                className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer"
              >
                <span className="bx bx-arrow-left text-2xl"></span>
              </div>
            </div>
            <div className="w-3/5 relative flex " id="slide">
              <ScrollContainer
                className={`w-full max-w-full flex overflow-hidden scrollbar-css`}
              >
                <img
                  src={images[index].src}
                  alt=""
                  className={`w-full h-80 object-cover z-0 rounded-lg  flex flex-shrink-0`}
                />
              </ScrollContainer>
            </div>
            <div className="w-1/5 flex items-center justify-start pl-6">
              <div
                onClick={() => {
                  if (index === images.length - 1) return;
                  else {
                    setIndex(index + 1);
                    document.getElementById("slide").scrollLeft =
                      (index + 1) * document.getElementById("slide").scrollLeft;
                  }
                }}
                className="w-12 h-12 rounded-full bg-gray-300 flex justify-center items-center cursor-pointer"
              >
                <span className="bx bx-arrow-left text-2xl"></span>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-end">
            <div className="flex">
              {images.map((image, pos) => {
                return (
                  <img
                    onClick={() => setIndex(pos)}
                    key={pos}
                    src={image.src}
                    alt=""
                    className={`w-36 h-28 mx-2 object-contain rounded-lg border-solid border-2 p-2  ${
                      index === pos
                        ? "border-gray-300"
                        : "hover:border-gray-300 border-white"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ImageOther;
