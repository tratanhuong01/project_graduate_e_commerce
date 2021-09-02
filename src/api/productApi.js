import api from "../Utils/api";

export const getProductFullByIdProduct = (idProduct) => {
  //
  return api(`products/full/${idProduct}`, "GET", null);
  //
};

export const getProductFullBySlug = (idProduct) => {
  //
  return api(`getProductBySlug/${idProduct}`, "GET", null);
  //
};

export const getProductByIdProduct = (idProduct) => {
  //
  return api(`products/${idProduct}`, "GET", null);
  //
};

export const getProductBySlug = () => {
  //
  return;
  //
};

export const getProductIndex = () => {
  //
  return api("getProductIndex", "GET", null);
  //
};
