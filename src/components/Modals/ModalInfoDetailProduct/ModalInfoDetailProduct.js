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
      styleChildren={{ height: "calc(100vh)" }}
      Component={() => <HeaderInfoDetailProduct bgBlack={"bg-black bg-opacity-80"}
        index={index} setIndex={setIndex} />}
      data={{ setData: (index) => setIndex(index), data: index }}
      bgBlack={"bg-black bg-opacity-80"}
      className="w-full absolute top-0 left-0 h-screen fixed z-50 animate__animated animate__fadeIn 
      bg-black dark:bg-dark-third"
    >
      <div className="w-10/12 mx-auto relative h-full bg-white dark:bg-dark-third">
        {data ? <Component /> : <LoadingModal />}
      </div>
    </ModalWrapper>
  );
}

export default ModalInfoDetailProduct;
