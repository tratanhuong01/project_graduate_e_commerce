import api from "../Utils/api";

export const addUser = (user) => {
  //
  return api("users", "POST", user);
  //
};

export const sendCodeEmail = (user) => {
  //
  return api("sendCodeMail", "POST", user);
  //
};
