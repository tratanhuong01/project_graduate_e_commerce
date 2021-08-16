import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainContact from "../../containers/Contact/MainContact";
import * as cartsAction from "../../actions/cart/index";

function Contact(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  useEffect(() => {
    //
    document.title = "Liên hệ";

    dispatch(modalsAction.closeModal());
    dispatch(cartsAction.loadCartRequest(user));
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
