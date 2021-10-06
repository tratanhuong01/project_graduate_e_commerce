import api from "../Utils/api";

export const addCommentByNews = (comment, headers) => {
  //
  return api("comments", "POST", comment, headers);
  //
};

export const getAllCommentByNews = (idNews, headers) => {
  //
  return api(`commentsAll/${idNews}`, "GET", null, headers);
  //
};

export const getCommentByNewsLimit = (idNews, index, limit, headers) => {
  //
  return api(
    `comments/${idNews}/${index * limit}/${limit}`,
    "GET",
    null,
    headers
  );
  //
};
