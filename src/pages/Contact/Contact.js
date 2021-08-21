import React, { useEffect } from "react";
import Modal from "../../containers/Modal";
import MainContact from "../../containers/Contact/MainContact";

function Contact(props) {
  //

  useEffect(() => {
    //
    document.title = "Liên hệ";
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
