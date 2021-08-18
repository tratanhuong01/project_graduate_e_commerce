import React, { useState } from "react";
import ScrollContainer from "react-indiana-drag-scroll";
import SliderProductLeft from "../../../components/Index/SliderProduct/SliderProductLeft/SliderProductLeft";
import SliderProductRight from "../../../components/Index/SliderProduct/SliderProductRight/SliderProductRight";

function SliderProduct(props) {
  const sliders = [
    {
      type: "ĐIỆN THOẠI HUAWEI",
      image: "http://www.thetahmid.com/themes/xemart-v1.0/images/sm-1.png",
      name: "Huawei Honor 8x | 8x Max",
      slogan: "Thương hiệu tạo nên đẳng cấp",
    },
    {
      type: "ĐIỆN THOẠI SAMSUNG",
      image: "http://www.thetahmid.com/themes/xemart-v1.0/images/sm-2.png",
      name: "Samsung galaxy S9 | S9+",
      slogan: "Thương hiệu tạo nên đẳng cấp",
    },
  ];

  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(true);
  const [current, setCurrent] = useState(sliders[index]);
  return (
    <ScrollContainer className="w-full max-w-full my-4 flex slider__index__main">
      <div className="w-full flex flex-shrink-0 relative data__hover">
        <div
          onClick={() => {
            if (index - 1 >= 0) {
              setIndex(index - 1);
              setCurrent(sliders[index - 1]);
              setShow(!show);
              setTimeout(() => {
                setShow(show);
              }, 500);
            }
          }}
          className="w-12 h-12 bg-white rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 left-3 z-20 flex justify-center items-center text-organce animate__animated animate__fadeInLeft hover__show stop__animation"
        >
          <span className="bx bx-chevron-left text-4xl flex"></span>
        </div>
        <div
          className={`xl:w-4/5 px-3 w-full flex mx-auto ${!show && "hidden"}`}
        >
          <SliderProductLeft current={current} />
          <SliderProductRight current={current} />
        </div>
        <div
          onClick={() => {
            if (index + 1 < sliders.length) {
              setIndex(index + 1);
              setCurrent(sliders[index + 1]);
              setShow(!show);
              setTimeout(() => {
                setShow(show);
              }, 500);
            }
          }}
          className="w-12 h-12 bg-white rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 right-3 z-20 flex justify-center items-center text-organce animate__animated animate__fadeInRight hover__show stop__animation"
        >
          <span className="bx bx-chevron-right text-4xl flex"></span>
        </div>
      </div>
    </ScrollContainer>
  );
}

export default SliderProduct;
