import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const getProductFullByIdProduct = (idProduct) => {
  //
  return api(`products/full/${idProduct}`, "GET", null, token);
  //
};

export const getProductFullBySlug = (idProduct) => {
  //
  return api(`getProductBySlug/${idProduct}`, "GET", null, token);
  //
};

export const getProductFullBySlugFDT = (formData) => {
  //
  return api(`getProductBySlug`, "POST", formData, token);
  //
};

export const getProductByIdProduct = (idProduct) => {
  //
  return api(`products/${idProduct}`, "GET", null, token);
  //
};

export const getProductAllCategory = (limit, index, type) => {
  //
  return api(
    `productsAll/main/?offset=${0}&limit=${12}&type=${type}`,
    "GET",
    null,
    token
  );
  //
};

export const getProductIndex = () => {
  //
  return api("getProductIndex", "GET", null, token);
  //
};

export const updateItemCurrentAndItemSold = (amount, idProduct) => {
  return api(
    `infoProducts/update/?amount=${amount}&idProduct=${idProduct}`,
    "GET",
    null,
    token
  );
};

export const getItemCurrentByIdProduct = (idProduct) => {
  return api(
    `infoProducts/itemCurrent/?idProduct=${idProduct}`,
    "GET",
    null,
    token
  );
};

export const getAllCategoryProduct = () => {
  return api("categoryProductsAll", "GET", null, token);
};

export const getAllGroupProduct = () => {
  return api("groupProductsAll", "GET", null, token);
};

export const getProductByCategory = (id) => {
  return api(`getProductByCategory/${id}`, "GET", null, token);
};

export const getProductFilterByGroupProduct = (slug, query) => {
  return api(
    `productsFilter?data=1&${slug ? "slugGroupProduct=" + slug : ""}${query}`,
    "GET",
    null,
    token
  );
};

export const groupProductsBySlugCategory = (categorySlug) => {
  return api(`groupProductsBySlugCategory/${categorySlug}`, "GET", null, token);
};

export const updateReviewProduct = (idProduct, review) => {
  return api(
    `infoProducts/review/update/?idProduct=${idProduct}&review=${review}`,
    "PUT",
    null,
    token
  );
};
