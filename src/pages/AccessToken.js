import React, { useEffect } from "react";
import { useHistory } from "react-router";
import jwt_decode from "jwt-decode";
import api from "../Utils/api";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_MODAL_LOGIN } from "../constants/ActionTypes";

function AccessToken(props) {
  const params = new URLSearchParams(window.location.search);
  const socket = useSelector((state) => state.socket);
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    //
    let unmounted = false;
    async function fetch() {
      const access_token = params.get("access_token");
      if (access_token) {
        const dataToken = jwt_decode(access_token);
        if (dataToken.jti) {
          let user = await api(`users/${dataToken.jti}`, "GET", null);
          if (user.data) {
            if (user.data.isVerifyEmail === 1)
              alert("Tài khoản của bạn đã xác nhận !!");
            else {
              user.data.isVerifyEmail = 1;
              await api(`users`, "PUT", user.data);
              socket.emit(
                `verifyAccount`,
                localStorage && localStorage.getItem("verifyData")
                  ? localStorage.getItem("verifyData")
                  : ""
              );
            }
            history.push("");
            dispatch({ type: OPEN_MODAL_LOGIN });
          } else history.push("");
        }
      } else history.push("");
    }
    if (unmounted) return;
    fetch();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div></div>;
}

export default AccessToken;
