import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import Modal from "../../containers/Modal";
import MainIndex from "../../containers/Index/MainIndex";
import Notify from "../../containers/Notify";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import api from "../../Utils/api";
import Loading from "../../components/General/Loading/Loading";
import * as cartsAction from "../../actions/cart/index";
import useScrollEvent from "../../hook/useScrollEvent";

function Index(props) {
  //
  const dispatch = useDispatch();
  const [chatBot, setChatBot] = useState(false);
  const [dataIndex, setDataIndex] = useState(null);
  const { show, subClassMenu } = useScrollEvent();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  useEffect(() => {
    //
    const fetch = async () => {
      document.title = "Trang chủ";
      dispatch(modalsAction.closeModal());
      const result = await api("getProductIndex", "GET", null);
      setDataIndex(result.data);
      dispatch(cartsAction.loadCartRequest(user));
    };
    fetch();
    return () => setDataIndex(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return dataIndex === null ? (
    <Loading />
  ) : (
    <>
      <MainIndex products={dataIndex} subClassMenu={subClassMenu} />
      <Modal isPopup={true} />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default Index;
