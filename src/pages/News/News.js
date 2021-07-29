import React, { useEffect } from "react";
import MainNews from "../../containers/News/MainNews";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { useDispatch } from "react-redux";

function News(props) {
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
      <MainNews />
      <Second />
    </>
  );
}

export default News;
