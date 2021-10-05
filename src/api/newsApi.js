import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const getNewsPage = () => {
  return api("getNewsPage", "GET", null, token);
};

export const updateViewNews = (slug) => {
  let formData = new FormData();
  formData.append("slug", slug);
  return api("updateViewNews", "PUT", formData, token);
};

export const getNewsBySlug = (slug) => {
  //
  let formData = new FormData();
  formData.append("slug", slug);
  return api("getNewsBySlug", "POST", formData, token);
  //
};

export const getListNewsMostView = () => {
  return api("getListNewsMostView", "GET", null, token);
};
