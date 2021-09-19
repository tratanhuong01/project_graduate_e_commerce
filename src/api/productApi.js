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

export const getProductFullBySlugFDT = (formData) => {
  //
  return api(`getProductBySlug`, "POST", formData);
  //
};

export const getProductByIdProduct = (idProduct) => {
  //
  return api(`products/${idProduct}`, "GET", null);
  //
};

export const getProductAllCategory = (limit, index, type) => {
  //
  return api(
    `productsAll/main/?offset=${0}&limit=${12}&type=${type}`,
    "GET",
    null
  );
  //
};

export const getProductIndex = () => {
  //
  return api("getProductIndex", "GET", null);
  //
};

export const updateItemCurrentAndItemSold = (amount, idProduct) => {
  return api(
    `infoProducts/update/?amount=${amount}&idProduct=${idProduct}`,
    "GET"
  );
};

export const getItemCurrentByIdProduct = (idProduct) => {
  return api(`infoProducts/itemCurrent/?idProduct=${idProduct}`, "GET", null);
};

export const getAllCategoryProduct = () => {
  return api("categoryProductsAll", "GET", null);
};

export const getAllGroupProduct = () => {
  return api("groupProductsAll", "GET", null);
};

export const getProductByCategory = (id) => {
  return api(`getProductByCategory/${id}`, "GET", null);
};

export const getProductFilterByGroupProduct = (slug, query) => {
  return api(`productsFilter?slugGroupProduct=${slug}${query}`, "GET", null);
};

export const groupProductsBySlugCategory = (categorySlug) => {
  return api(`groupProductsBySlugCategory/${categorySlug}`, "GET", null);
};
