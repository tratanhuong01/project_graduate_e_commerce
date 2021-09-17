import api from "../Utils/api";

export const getMessageByIdGroupChat = (idGroupChat) => {
  return api(`messages/group/${idGroupChat}`, "GET", null);
};

export const addGroupChat = (groupChat) => {
  return api(`groupChats`, "POST", groupChat);
};

export const addMessages = (messages) => {
  return api(`messages`, "POST", messages);
};
