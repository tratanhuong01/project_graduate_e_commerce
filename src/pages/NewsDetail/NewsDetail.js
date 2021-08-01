import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Modal from "../../containers/Modal";
import * as modalsAction from "../../actions/modal/index";
import MainNewsDetail from "../../containers/NewsDetail/MainNewsDetail";
function NewsDetail(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainNewsDetail />
      <Modal />
    </>
  );
}

export default NewsDetail;
