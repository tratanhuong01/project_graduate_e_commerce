import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import MainAbout from "../../containers/About/MainAbout";
import Modal from "../../containers/Modal";

function About(props) {
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
      <MainAbout />
      <Modal />
    </>
  );
}

export default About;
