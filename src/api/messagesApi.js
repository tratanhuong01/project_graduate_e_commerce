import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const getMessageByIdGroupChat = (idGroupChat) => {
  return api(`messages/group/${idGroupChat}`, "GET", null, token);
};

export const addGroupChat = (groupChat) => {
  return api(`groupChats`, "POST", groupChat, token);
};

export const addMessages = (messages) => {
  return api(`messages`, "POST", messages, token);
};
