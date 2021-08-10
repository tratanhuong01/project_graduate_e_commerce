import React from "react";

function ItemImageRate(props) {
  //
  const { image, setImages, images, index } = props;
  //
  return (
    <div className="w-20 h-20 rounded-lg relative mx-2">
      <div
        onClick={() => {
          let imageNews = [...images];
          imageNews.splice(index, 1);
          setImages(imageNews);
        }}
        className="w-5 h-5 flex justify-center items-center
        rounded-full cursor-pointer bg-gray-300 absolute -top-1.5 -right-1.5 "
      >
        <span className="bx bx-x flex"></span>
      </div>
      <img
        src={URL.createObjectURL(image)}
        alt=""
        className="w-20 h-20 object-cover"
      />
    </div>
  );
}

export default ItemImageRate;
