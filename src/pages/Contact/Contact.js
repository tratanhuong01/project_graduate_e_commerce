import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainContact from "../../containers/Contact/MainContact";
import * as cartsAction from "../../actions/cart/index";
import useScrollEvent from "../../hook/useScrollEvent";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";

function Contact(props) {
  //
  const dispatch = useDispatch();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { show, subClassMenu } = useScrollEvent();
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
      {show && <ScrollTop />}
      <MainContact subClassMenu={subClassMenu} />
      <Modal />
    </>
  );
}

export default Contact;
