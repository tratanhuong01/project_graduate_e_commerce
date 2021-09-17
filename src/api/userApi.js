import api from "../Utils/api";

export const addUser = (user) => {
  //
  return api("users", "POST", user);
  //
};

export const sendCodeEmail = (user) => {
  //
  return api("sendCodeEmail", "POST", user);
  //
};

export const getTeleSupport = () => {
  return api(`getTeleSupport`, "GET", null);
};
