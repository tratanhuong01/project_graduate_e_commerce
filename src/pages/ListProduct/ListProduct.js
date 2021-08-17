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
import Loading from "../../components/General/Loading/Loading";
import * as listProductsAction from "../../actions/listProduct/index";
import useScrollEvent from "../../hook/useScrollEvent";

function ListProduct(props) {
  //
  const dispatch = useDispatch();
  const { show, subClassMenu } = useScrollEvent();
  const [chatBot, setChatBot] = useState(false);
  const states = useSelector((state) => {
    return {
      user: state.user,
      listProduct: state.listProduct,
    };
  });
  const { match } = props;
  const { user, listProduct } = states;
  useEffect(() => {
    //
    let mounted = true;
    if (mounted) {
      document.title = "Sản phẩm";
      dispatch(modalsAction.closeModal());
      dispatch(cartsAction.loadCartRequest(user));
      dispatch(
        listProductsAction.loadListProductRequest({
          slugCategoryProduct: match.match.params.slugCategoryProduct,
          slugGroupProduct:
            typeof match.match.params.slugGroupProduct === "undefined"
              ? null
              : match.match.params.slugGroupProduct,
        })
      );
    }
    return () => (mounted = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);
  useEffect(() => {}, [listProduct]);
  //
  return listProduct.products === null ? (
    <Loading />
  ) : (
    <>
      <MainListProduct subClassMenu={subClassMenu} />
      <Modal />
      <Notify />
      {show && <ScrollTop />}
      {chatBot ? "" : <ChatBot setChatBot={setChatBot} />}
      {chatBot && <ModalChatBot setChatBot={setChatBot} />}
    </>
  );
}

export default ListProduct;
