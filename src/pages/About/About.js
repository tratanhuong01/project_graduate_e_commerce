import React, { useEffect } from "react";
import MainAbout from "../../containers/About/MainAbout";
import Modal from "../../containers/Modal";

function About(props) {
  //
  useEffect(() => {
    //
    document.title = "Giới thiệu";
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
