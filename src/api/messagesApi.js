import api from "../Utils/api";

export const getMessageByIdGroupChat = (idGroupChat, headers) => {
  return api(`messages/group/${idGroupChat}`, "GET", null, headers);
};

export const addGroupChat = (groupChat, headers) => {
  return api(`groupChats`, "POST", groupChat, headers);
};

export const addMessages = (messages, headers) => {
  return api(`messages`, "POST", messages, headers);
};
