import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import MainListProduct from "../../containers/ListProduct/MainListProduct";
import Modal from "../../containers/Modal";
import Notify from "../../containers/Notify";

function ListProduct(props) {
  //
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [chatBot, setChatBot] = useState(false);
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
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
