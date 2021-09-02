import api from "../Utils/api";

export const addCommentByNews = (comment) => {
  //
  return api("comments", "POST", comment);
  //
};

export const getAllCommentByNews = (idNews) => {
  //
  return api(`commentsAll/${idNews}`, "GET", null);
  //
};

export const getCommentByNewsLimit = (idNews, offset, limit) => {
  //
  return api(`comments/${idNews}/${offset}/${limit}`, "GET", null);
  //
};
