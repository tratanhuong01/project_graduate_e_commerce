import * as messagesApi from "../../api/messagesApi";
import * as Types from "../../constants/ActionTypes";
import * as userApi from "../../api/userApi";

export const startChatSupportLiveRequest = (data, headers) => {
  return async (dispatch) => {
    const groupChat = await messagesApi.addGroupChat(
      {
        id: null,
        fullName: data.name,
        phone: data.phone,
        sex: data.nickName,
        avatar: "https://vacpa.edu.vn/Content/images/avatar/avatar.png",
        typeGroupChat: 0,
        timeCreated: null,
      },
      headers
    );
    await messagesApi.addMessages(
      {
        id: null,
        userMessages: null,
        groupChatMessages: groupChat.data,
        guest: null,
        content: data.content,
        images: null,
        timeCreated: null,
        typeMessages: 0,
      },
      headers
    );
    await messagesApi.addMessages(
      {
        id: null,
        userMessages: data.admin,
        groupChatMessages: groupChat.data,
        guest: null,
        content: `🥰🥰 Chào mừng ${data.nickName} đã đến với hsmart , ${data.nickName} cần hổ trợ gì ạ ? 🥰🥰 `,
        images: null,
        timeCreated: null,
        typeMessages: 1,
      },
      headers
    );
    dispatch(updateGroupSupportLive(groupChat.data));
    data.socket.emit("chatMessage", data.admin.id);
  };
};

export const loadMessageRequest = (groupChat, headers) => {
  return async (dispatch) => {
    const result = await messagesApi.getMessageByIdGroupChat(
      groupChat.id,
      headers
    );
    dispatch(loadMessage(result.data));
  };
};

export const loadMessage = (list) => {
  return {
    type: Types.LOAD_MESSAGES_SUPPORT_LIVE,
    list,
  };
};

export const randomUserSupportLiveRequest = (headers) => {
  return async (dispatch) => {
    const admin = await userApi.getTeleSupport();
    dispatch(randomUserSupportLive(admin.data, headers));
  };
};

export const randomUserSupportLive = (admin) => {
  return {
    type: Types.UPDATE_ADMIN_SUPPORT_LIVE,
    admin,
  };
};

export const updateGroupSupportLive = (group) => {
  return {
    type: Types.UPDATE_GROUP_SUPPORT_LIVE,
    group,
  };
};

export const updateFirstSupportLive = (status) => {
  return {
    type: Types.UPDATE_FIRST_SUPPORT_LIVE,
    status,
  };
};
