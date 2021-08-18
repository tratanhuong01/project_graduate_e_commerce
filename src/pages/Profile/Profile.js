import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useScrollEvent from "../../hook/useScrollEvent";
import * as cartsAction from "../../actions/cart/index";
import * as modalsAction from "../../actions/modal/index";
import Loading from "../../components/General/Loading/Loading";
import Modal from "../../containers/Modal";
import Notify from "../../containers/Notify";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import MainProfile from "../../containers/Profile/MainProfile";

function Profile(props) {
  //
  const dispatch = useDispatch();
  const [chatBot, setChatBot] = useState(false);
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
      document.title = "Tài khoản của tôi";
      dispatch(modalsAction.closeModal());
      dispatch(cartsAction.loadCartRequest(user));
    };
    fetch();
    return () => "";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return "null" === null ? (
    <Loading />
  ) : (
    <>
      <MainProfile />
      <Modal isPopup={true} />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default Profile;
