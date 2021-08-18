import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartsAction from "../../actions/cart/index";
import ChatBot from "../../components/General/ChatBot/ChatBot";
import ModalChatBot from "../../components/General/ChatBot/ModalChatBot/ModalChatBot";
import Loading from "../../components/General/Loading/Loading";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import Modal from "../../containers/Modal";
import Notify from "../../containers/Notify";
import useScrollEvent from "../../hook/useScrollEvent";
import * as modalsAction from "../../actions/modal/index";
import MainWishlist from "../../containers/Wishlist/MainWishlist";
function Wishlist(props) {
  //
  const dispatch = useDispatch();
  const [chatBot, setChatBot] = useState(false);
  const [wishList, setWishList] = useState(null);
  const { show, subClassMenu } = useScrollEvent();
  const states = useSelector((state) => {
    return {
      user: state.user,
    };
  });
  const { user } = states;
  useEffect(() => {
    //
    const fetch = () => {
      document.title = "Trang chủ";
      dispatch(modalsAction.closeModal());
      setWishList(["oke"]);
      dispatch(cartsAction.loadCartRequest(user));
    };
    fetch();
    return () => setWishList(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return wishList === null ? (
    <Loading />
  ) : (
    <>
      <MainWishlist wishList={wishList} subClassMenu={subClassMenu} />
      <Modal />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default Wishlist;
