import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainIndex from "../../containers/Index/MainIndex";
import Notify from "../../containers/Notify";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import api from "../../Utils/api";
import Loading from "../../components/General/Loading/Loading";

function Index(props) {
  //
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [chatBot, setChatBot] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);
  useEffect(async () => {
    //
    dispatch(modalsAction.closeModal());
    window.onscroll = () => {
      if (window.scrollY > 300) setShow(true);
      else setShow(false);
    };
    const result = await api("getProductIndex", "GET", null);
    setDataIndex(result.data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return dataIndex === null ? (
    <Loading />
  ) : (
    <>
      <MainIndex products={dataIndex} />
      <Modal isPopup={true} />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default Index;
