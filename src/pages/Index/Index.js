import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainIndex from "../../containers/Index/MainIndex";

function Index(props) {
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
      <MainIndex />
      <Modal isPopup={true} />
    </>
  );
}

export default Index;
