import React, { useEffect, useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";

function ImageOther(props) {
  //
  const { images } = props;
  const [index, setIndex] = useState(0);
  useEffect(() => { }, [images]);
  //
  return (
    <div className="w-full h-full">
      {images.length > 0 && (
        <>
          <div className="w-full flex items-start" style={{ height: "calc(100% - 133px)" }}>
            {index !== 0 && images.length !== 0 ? <div className="w-1/5 h-full flex items-center justify-end pr-6">
              <div
                onClick={() => {
                  if (index === 0) return;
                  else {
                    setIndex(index - 1);
                    document.getElementById("slide").scrollLeft =
                      (index - 1) * document.getElementById("slide").scrollLeft;
                  }
                }}
                className="w-12 h-12 rounded-full bg-gray-300 dark:bg-dark-second flex justify-center items-center cursor-pointer"
              >
                <span className="bx bx-chevron-left text-2xl dark:text-white text-black"></span>
              </div>
            </div> : <div className="w-1/5"></div>}
            <div className="w-3/5 relative h-full" id="slide">
              <img
                src={images[index].src}
                alt=""
                className={`w-full h-full object-contain z-0 rounded-sm`}
              />
            </div>
            {index < images.length - 1 && images.length !== 1 ? <div className="w-1/5 flex h-full items-center justify-start pl-6">
              <div
                onClick={() => {
                  if (index === images.length - 1) return;
                  else {
                    setIndex(index + 1);
                    document.getElementById("slide").scrollLeft =
                      (index + 1) * document.getElementById("slide").scrollLeft;
                  }
                }}
                className="w-12 h-12 rounded-full dark:bg-dark-second  bg-gray-300 flex justify-center items-center cursor-pointer"
              >
                <span className="bx bx-chevron-right text-2xl dark:text-white text-black"></span>
              </div>
            </div> : <div className="w-1/5"></div>}
          </div>
          <div className="w-full flex justify-center items-end">
            <ScrollContainer className="flex w-full justify-center max-w-full overflow-x-auto scrollbar-css">
              {images.map((image, pos) => {
                return (
                  <img
                    onClick={() => setIndex(pos)}
                    key={pos}
                    src={image.src}
                    alt=""
                    className={`w-36 h-28 -pt-5 mx-2 object-contain rounded-lg border-solid border-2 border-white 
                    dark:border-dark-third p-2  ${index === pos
                        ? "border-gray-300 dark:border-white"
                        : "hover:border-gray-300 dark:border-dark-third"
                      }`}
                  />
                );
              })}
            </ScrollContainer>
          </div>
        </>
      )
      }
    </div >
  );
}

export default ImageOther;
