import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainSearch from "../../containers/Search/MainSearch";
import Modal from "../../containers/Modal";

function Search(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainSearch />
      <Modal />
    </>
  );
}

export default Search;
