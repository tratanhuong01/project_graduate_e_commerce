import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as modalsAction from "../../actions/modal/index";
import ScrollTop from "../../components/General/ScrollTop/ScrollTop";
import MainAbout from "../../containers/About/MainAbout";
import Modal from "../../containers/Modal";
import useScrollEvent from "../../hook/useScrollEvent";

function About(props) {
  //
  const dispatch = useDispatch();
  const { show, subClassMenu } = useScrollEvent();

  useEffect(() => {
    //
    document.title = "Giới thiệu";

    dispatch(modalsAction.closeModal());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      {show && <ScrollTop />}
      <MainAbout subClassMenu={subClassMenu} />
      <Modal />
    </>
  );
}

export default About;
