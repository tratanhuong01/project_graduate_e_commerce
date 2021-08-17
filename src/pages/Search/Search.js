import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainSearch from "../../containers/Search/MainSearch";
import Modal from "../../containers/Modal";
import useScrollEvent from "../../hook/useScrollEvent";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
// import * as cartsAction from "../../actions/cart/index";

function Search(props) {
  //
  const dispatch = useDispatch();
  const { show, subClassMenu } = useScrollEvent();
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      {show && <ScrollTop />}
      <MainSearch subClassMenu={subClassMenu} />
      <Modal />
    </>
  );
}

export default Search;
