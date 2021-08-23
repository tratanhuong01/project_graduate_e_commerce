import React from "react";
import Modal from "../../containers/Modal";
import MainContact from "../../containers/Contact/MainContact";
import useResetPage from "../../hook/useResetPage";

function Contact(props) {
  //
  useResetPage("Liên hệ");
  //
  return (
    <>
      <MainContact />
      <Modal />
    </>
  );
}

export default Contact;
