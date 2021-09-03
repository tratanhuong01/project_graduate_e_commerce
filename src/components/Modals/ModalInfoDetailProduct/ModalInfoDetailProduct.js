import React, { useEffect, useState } from "react";
import api from "../../../Utils/api";
import CloseModal from "../../General/CloseModal/CloseModal";
import LoadingModal from "../../General/Loading/LoadingModal/LoadingModal";
import ImageOther from "./ImageOther";
import TechnicalData from "./TechnicalData/TechnicalData";

function ModalInfoDetailProduct(props) {
  //
  const { idLineProduct } = props;
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(1);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result_1 = await api(
        `attributeProducts/${idLineProduct}`,
        "GET",
        null
      );
      const result_2 = await api(`imageOthers/${idLineProduct}`, "GET", null);
      if (unmounted) return;
      setData({ attributes: result_1.data, images: result_2.data });
    }
    fetch();
    return () => {
      unmounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const Component = () =>
    index === 0 ? (
      <ImageOther images={data.images} />
    ) : (
      <TechnicalData attributes={data.attributes} />
    );
  //
  return (
    <div
      className="w-11/12 xl:w-2/3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-0 animate__animated animate__fadeIn bg-white"
    >
      <div
        className="w-full relative"
        style={{ height: "90vh", maxHeight: "90vh" }}
      >
        <div className="w-full h-16 border-n-2 border-solid border-gray-400 flex items-center justify-center bg-white rounded-t-lg fixed top-0 z-50">
          <ul className="flex justify-center items-center">
            <li
              onClick={() => setIndex(0)}
              className={`border-b-4 py-2 mx-2 border-solid font-semibold px-4 cursor-pointer 
              ${
                index === 0
                  ? "border-organce  text-organce"
                  : "border-white  text-gray-800"
              }`}
            >
              Hình ảnh
            </li>
            <li
              onClick={() => setIndex(1)}
              className={`border-b-4 py-2 mx-2 border-solid font-semibold px-4 cursor-pointer 
              ${
                index === 1
                  ? "border-organce  text-organce"
                  : "border-white  text-gray-800"
              }`}
            >
              Thông số kỉ thuật
            </li>
          </ul>
          <CloseModal />
        </div>
        {data ? <Component /> : <LoadingModal />}
      </div>
    </div>
  );
}

export default ModalInfoDetailProduct;
