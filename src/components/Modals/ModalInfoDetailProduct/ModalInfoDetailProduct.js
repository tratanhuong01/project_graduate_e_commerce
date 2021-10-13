import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ModalWrapper from "../../../containers/ModalWrapper";
import api from "../../../Utils/api";
import LoadingModal from "../../General/Loading/LoadingModal/LoadingModal";
import HeaderInfoDetailProduct from "./HeaderInfoDetailProduct/HeaderInfoDetailProduct";
import ImageOther from "./ImageOther";
import TechnicalData from "./TechnicalData/TechnicalData";

function ModalInfoDetailProduct(props) {
  //
  const { idLineProduct } = props;
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(1);
  const headers = useSelector((state) => state.headers);
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const result_1 = await api(
        `attributeProducts/${idLineProduct}`,
        "GET",
        null,
        headers
      );
      const result_2 = await api(
        `imageOthers/${idLineProduct}`,
        "GET",
        null,
        headers
      );
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
    <ModalWrapper
      Component={HeaderInfoDetailProduct}
      data={{ setData: (index) => setIndex(index), data: index }}
      styleChildren={{ height: "calc(90vh - 10px)" }}
      className="w-11/12 xl:w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        rounded-lg z-0 animate__animated animate__fadeIn bg-white dark:bg-dark-third"
    >
      <div className="w-full relative h-full dark:bg-dark-third">
        {data ? <Component /> : <LoadingModal />}
      </div>
    </ModalWrapper>
  );
}

export default ModalInfoDetailProduct;
