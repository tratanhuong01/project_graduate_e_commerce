import React, { useEffect } from "react";
import EndFooter from "./components/Footer/EndFooter/EndFooter";
import ReciviceInfo from "./components/Footer/ReciviceInfo/ReciviceInfo";
import ChatBot from "./components/General/ChatBot/ChatBot";
import ScrollTop from "./components/General/ScrollTop/ScrollTop";
import Header from "./components/Header/Header";
import Rule from "./containers/General/Rule";
import Modal from "./containers/Modal";
import Notify from "./containers/Notify";
import * as usersAction from "./actions/user/index";
import { useDispatch } from "react-redux";

function MainApp(props) {
  //
  const dispatch = useDispatch();
  useEffect(() => {
    //
    dispatch(usersAction.loadUserRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <>
      <div className="w-full dark:bg-dark-second">
        <Header />
        {props.children}
        <Rule />
        <ReciviceInfo />
        <EndFooter />
        <Notify />
        <ScrollTop />
        <ChatBot />
      </div>
      <Modal />
    </>
  );
}

export default MainApp;
