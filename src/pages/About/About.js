import React, { useEffect } from "react";
import MainAbout from "../../containers/About/MainAbout";
import Second from "../../containers/Second";
import * as actions from "../../actions/index";
import { useDispatch } from "react-redux";

function About(props) {
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
      <MainAbout />
      <Second />
    </>
  );
}

export default About;
