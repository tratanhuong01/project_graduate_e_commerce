import api from "../Utils/api";

export const getNewsPage = (headers) => {
  return api("getNewsPage", "GET", null, headers);
};

export const updateViewNews = (slug, headers) => {
  let formData = new FormData();
  formData.append("slug", slug);
  return api("updateViewNews", "PUT", formData, headers);
};

export const getNewsBySlug = (slug, headers) => {
  //
  let formData = new FormData();
  formData.append("slug", slug);
  return api("getNewsBySlug", "POST", formData, headers);
  //
};

export const getListNewsMostView = (headers) => {
  return api("getListNewsMostView", "GET", null, headers);
};
