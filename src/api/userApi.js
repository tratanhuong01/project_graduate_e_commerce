import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const addUser = (user) => {
  //
  return api("users", "POST", user, token);
  //
};

export const sendCodeEmail = (user) => {
  //
  return api("sendCodeEmail", "POST", user, token);
  //
};

export const getTeleSupport = () => {
  return api(`getTeleSupport`, "GET", null, token);
};

export const getUserByIdUser = (idUser) => {
  return api(`users/${idUser}`, "GET", null, token);
};

export const checkLoginJWT = (data) => {
  return api(`checkLoginJWT`, "POST", data, token);
};

export const getInfoUserFromTokenJWT = () => {
  return api(`getUserFromJWT`, "POST", token.Authorization, token);
};
