import * as Types from "../../constants/ActionTypes";
import * as commentApi from "../../api/commentApi";

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
    await commentApi.addCommentByNews(comment);
    const result_1 = await commentApi.getCommentByNewsLimit(news.id, 0, 5);
    const result_2 = await commentApi.getAllCommentByNews(news.id);
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
    const result = await commentApi.getCommentByNewsLimit(
      news.id,
      index * 5,
      5
    );
    dispatch(
      loadNewsIndexPage({
        comments: result.data,
        index: index,
      })
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
      reply: commentReply ? commentReply.id : null,
      commentNews: news,
      content: content,
      timeCreated: "",
    };
    await commentApi.addCommentByNews(comment);
    const result_1 = await commentApi.getCommentByNewsLimit(
      news.id,
      index * 5,
      5
    );
    const result_2 = await commentApi.getAllCommentByNews(news.id);
    dispatch(
      addComment({
        comments: result_1.data,
        commentsAll: result_2.data,
      })
    );
  };
};
