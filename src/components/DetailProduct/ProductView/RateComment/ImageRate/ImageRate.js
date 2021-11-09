import React from "react";
import ItemImageRate from "./ItemImageRate/ItemImageRate";

function ImageRate({ images, setImages }) {
  //

  //
  return (
    <>
      <div className="w-full my-1 flex p-2.5 rounded-full border-2 border-solid border-gray-300">
        <input
          onChange={(event) => {
            if (event.target.files.length > 0) {
              let imageFiles = [];
              const files = event.target.files;
              for (let index = 0; index < files.length; index++) {
                const file = files[index];
                imageFiles.push(file);
              }
              setImages([...imageFiles]);
            }
          }}
          type="file"
          id="fileImage"
          className="hidden"
          multiple
        />
        <label htmlFor="fileImage" className="w-full flex items-center">
          <span
            className="bx bxs-image-add text-3xl flex items-center 
          text-organce mr-4"
          ></span>
          <span className="text-gray-700 font-semibold dark:text-gray-300">
            Đính kèm hình ảnh (chọn tối đa 3 hình ảnh)
          </span>
        </label>
      </div>
      <div className="w-full flex my-2">
        {images.map((image, index) => {
          return (
            <ItemImageRate
              image={image}
              key={index}
              images={images}
              index={index}
              setImages={setImages}
            />
          );
        })}
      </div>
    </>
  );
}

export default ImageRate;
