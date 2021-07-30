import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainContact from "../../containers/Contact/MainContact";

function Contact(props) {
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
      <MainContact />
      <Modal />
    </>
  );
}

export default Contact;
