import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const addCommentByNews = (comment) => {
  //
  return api("comments", "POST", comment, token);
  //
};

export const getAllCommentByNews = (idNews) => {
  //
  return api(`commentsAll/${idNews}`, "GET", null, token);
  //
};

export const getCommentByNewsLimit = (idNews, index, limit) => {
  //
  return api(
    `comments/${idNews}/${index * limit}/${limit}`,
    "GET",
    null,
    token
  );
  //
};
