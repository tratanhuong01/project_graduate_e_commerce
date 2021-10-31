import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../actions/modal/index";
import MainIndex from "../containers/Index/MainIndex";
import Loading from "../components/General/Loading/Loading";
import useResetPage from "../hook/useResetPage";
import * as productApi from "../api/productApi";

function Index(props) {
  //
  const dispatch = useDispatch();
  const { modal, headers } = useSelector((state) => {
    return {
      headers: state.headers,
      modal: state.modal,
    };
  });
  const [dataIndex, setDataIndex] = useState(null);
  useResetPage("Trang chủ");
  useEffect(() => {
    //
    const fetch = async () => {
      try {
        if (!modal.data) dispatch(modalsAction.setPopupAds());
        const result = await productApi.getProductIndex(headers);
        setDataIndex(result.data);
      } catch (error) {
        throw error;
      }
    };
    fetch();
    return () => setDataIndex(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return dataIndex === null ? (
    <Loading />
  ) : (
    <>
      <MainIndex products={dataIndex} />
    </>
  );
}

export default Index;
