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
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
function MainApp(props) {
  //
  const dispatch = useDispatch();
  const history = useHistory();
  const { headers, socket, user } = useSelector((state) => {
    return {
      headers: state.headers,
      socket: state.socket,
      user: state.user,
    };
  });
  useEffect(() => {
    //
    if (localStorage && localStorage.getItem("userToken")) {
      const token = jwt_decode(localStorage.getItem("userToken"));
      if (token.exp < Date.now() / 1000) {
        localStorage.removeItem("userToken");
      } else {
        dispatch(usersAction.loadUserRequest(headers));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //
    const onEvent = () => {
      dispatch(usersAction.logoutAccount());
      history.push("");
    };
    if (user) socket.on(`updateStatusUser.${user.id}`, onEvent);
    return () => {
      if (user) socket.off(`updateStatusUser.${user.id}`, onEvent);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
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
