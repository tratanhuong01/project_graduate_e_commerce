import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";

export const addCommentRequest = (data) => {
  return async (dispatch) => {
    const { user, fullName, email, news, content } = data;
    const comment = {
      id: -1,
      commentUser: user,
      fullName: user !== null ? null : fullName,
      email: user !== null ? null : email,
      level: 1,
      reply: null,
      commentNews: news,
      content: content,
      timeCreated: "",
    };
    await api(`comments`, "POST", comment);
    const result_1 = await api(`comments/${news.id}/${0}/5`, "GET", null);
    const result_2 = await api(`commentsAll/${news.id}`, "GET", null);
    dispatch(
      addComment({
        comments: result_1.data,
        commentsAll: result_2.data,
      })
    );
  };
};

export const addComment = (data) => {
  return {
    type: Types.ADD_NEWS,
    data,
  };
};

export const loadNewsData = (data) => {
  return {
    type: Types.LOAD_NEWS_DATA,
    data,
  };
};

export const loadNewsIndexPageRequest = (data) => {
  return async (dispatch) => {
    const { index, news } = data;
    const result = await api(`comments/${news.id}/${index * 5}/5`, "GET", null);
    dispatch(
      loadNewsIndexPage({
        comments: result.data,
        index: index,
      })
    );
    if (document.getElementById("detailRateComment"))
      window.scrollTo(
        0,
        document.getElementById("detailRateComment").getBoundingClientRect()
          .top +
          window.scrollY -
          100
      );
  };
};

export const loadNewsIndexPage = (data) => {
  return {
    type: Types.LOAD_NEWS_INDEX_PAGE,
    data,
  };
};

export const replyCommentRequest = (data) => {
  return async (dispatch) => {
    const { user, fullName, email, news, content, commentReply, index } = data;
    const comment = {
      id: -1,
      commentUser: user,
      fullName: user !== null ? null : fullName,
      email: user !== null ? null : email,
      level: 2,
      reply: commentReply.id,
      commentNews: news,
      content: content,
      timeCreated: "",
    };
    await api(`comments`, "POST", comment);
    const result_1 = await api(
      `comments/${news.id}/${index * 5}/5`,
      "GET",
      null
    );
    const result_2 = await api(`commentsAll/${news.id}`, "GET", null);
    dispatch(
      addComment({
        comments: result_1.data,
        commentsAll: result_2.data,
      })
    );
  };
};
