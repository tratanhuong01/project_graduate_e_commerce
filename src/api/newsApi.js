import api from "../Utils/api";

export const getNewsPage = () => {
  return api("getNewsPage", "GET", null);
};

export const updateViewNews = (slug) => {
  let formData = new FormData();
  formData.append("slug", slug);
  return api("updateViewNews", "PUT", formData);
};

export const getNewsBySlug = (slug) => {
  //
  let formData = new FormData();
  formData.append("slug", slug);
  return api("getNewsBySlug", "POST", formData);
  //
};

export const getListNewsMostView = () => {
  return api("getListNewsMostView", "GET", null);
};
