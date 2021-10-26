import * as Types from "../../constants/ActionTypes";
import * as commentApi from "../../api/commentApi";

export const addCommentRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const { user, fullName, email, news, content, socket } = data;
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
      const result_1 = await commentApi.getCommentByNewsLimit(
        news.id,
        0,
        5,
        headers
      );
      const result_2 = await commentApi.getAllCommentByNews(news.id, headers);
      dispatch(
        addComment({
          comments: result_1.data,
          commentsAll: result_2.data,
        })
      );
      socket.emit(`commentNews`, news.id);
    } catch (error) {
      throw error;
    }
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

export const loadNewsIndexPageRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const { index, news } = data;
      const result = await commentApi.getCommentByNewsLimit(
        news.id,
        index * 5,
        5,
        headers
      );
      dispatch(
        loadNewsIndexPage({
          comments: result.data,
          index: index,
        })
      );
      if (document.getElementById(`position__comment`))
        window.scrollTo(
          0,
          document.getElementById(`position__comment`).getBoundingClientRect()
            .top +
            window.scrollY -
            100
        );
    } catch (error) {
      throw error;
    }
  };
};

export const loadNewsIndexPage = (data) => {
  return {
    type: Types.LOAD_NEWS_INDEX_PAGE,
    data,
  };
};

export const replyCommentRequest = (data, headers) => {
  return async (dispatch) => {
    try {
      const {
        user,
        fullName,
        email,
        news,
        content,
        commentReply,
        index,
        socket,
      } = data;
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
      await commentApi.addCommentByNews(comment, headers);
      const result_1 = await commentApi.getCommentByNewsLimit(
        news.id,
        index * 5,
        5,
        headers
      );
      const result_2 = await commentApi.getAllCommentByNews(news.id, headers);
      dispatch(
        addComment({
          comments: result_1.data,
          commentsAll: result_2.data,
        })
      );
      socket.emit("commentNews", news.id);
    } catch (error) {
      throw error;
    }
  };
};

export const loadCommentNewsRequest = (data) => {
  return async (dispatch) => {
    //
    const { newsDetail, headers } = data;
    //
    const result_1 = await commentApi.getAllCommentByNews(
      newsDetail.news.id,
      headers
    );
    const result_2 = await commentApi.getCommentByNewsLimit(
      newsDetail.news.id,
      0,
      5,
      headers
    );
    dispatch(
      loadNewsData({
        commentsAll: result_1.data,
        comments: result_2.data,
        news: newsDetail.news,
      })
    );
  };
};
