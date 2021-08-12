import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Modal from "../../containers/Modal";
import Notify from "../../containers/Notify";
import * as cartsAction from "../../actions/cart/index";

function ListProduct(props) {
  //
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [chatBot, setChatBot] = useState(false);
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  // const { match } = props;
  const { user } = states;
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    dispatch(cartsAction.loadCartRequest(user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainListProduct />
      <Modal />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default ListProduct;
