import * as Types from "../constants/ActionTypes";

const initialState = {
  comments: null,
  commentsAll: null,
  index: 0,
  news: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_NEWS_DATA:
      state.comments = action.data.comments;
      state.commentsAll = action.data.commentsAll;
      state.news = action.data.news;
      return { ...state };
    case Types.LOAD_NEWS_INDEX_PAGE:
      state.index = action.data.index;
      state.comments = action.data.comments;
      return { ...state };
    case Types.ADD_NEWS:
      state.comments = action.data.comments;
      state.commentsAll = action.data.commentsAll;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
