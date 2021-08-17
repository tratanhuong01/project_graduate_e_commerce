import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainNews from "../../containers/News/MainNews";
import Modal from "../../containers/Modal";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import useScrollEvent from "../../hook/useScrollEvent";
// import * as cartsAction from "../../actions/cart/index";

function News(props) {
  //
  const dispatch = useDispatch();
  const { show, subClassMenu } = useScrollEvent();
  useEffect(() => {
    //
    document.title = "Tin tức";
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      {show && <ScrollTop />}
      <MainNews subClassMenu={subClassMenu} />
      <Modal />
    </>
  );
}

export default News;
