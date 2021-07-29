import React, { useEffect } from "react";
import MainSearch from "../../containers/Search/MainSearch";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { useDispatch } from "react-redux";

function Search(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(actions.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <MainSearch />
      <Second />
    </>
  );
}

export default Search;
