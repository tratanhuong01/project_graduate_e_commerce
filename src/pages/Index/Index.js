import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainIndex from "../../containers/Index/MainIndex";
import api from "../../Utils/api";
import Loading from "../../components/General/Loading/Loading";
import useResetPage from "../../hook/useResetPage";

function Index(props) {
  //
  const dispatch = useDispatch();
  const [dataIndex, setDataIndex] = useState(null);
  useResetPage("Trang chủ");
  useEffect(() => {
    //
    const fetch = async () => {
      dispatch(modalsAction.setPopupAds());
      const result = await api("getProductIndex", "GET", null);
      setDataIndex(result.data);
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
