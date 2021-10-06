import api from "../Utils/api";

export const getProductFullByIdProduct = (idProduct, headers) => {
  //
  return api(`products/full/${idProduct}`, "GET", null, headers);
  //
};

export const getProductFullBySlug = (idProduct, headers) => {
  //
  return api(`getProductBySlug/${idProduct}`, "GET", null, headers);
  //
};

export const getProductFullBySlugFDT = (formData, headers) => {
  //
  return api(`getProductBySlug`, "POST", formData, headers);
  //
};

export const getProductByIdProduct = (idProduct, headers) => {
  //
  return api(`products/${idProduct}`, "GET", null, headers);
  //
};

export const getProductAllCategory = (limit, index, type, headers) => {
  //
  return api(
    `productsAll/main/?offset=${0}&limit=${12}&type=${type}`,
    "GET",
    null,
    headers
  );
  //
};

export const getProductIndex = (headers) => {
  //
  return api("getProductIndex", "GET", null, headers);
  //
};

export const updateItemCurrentAndItemSold = (amount, idProduct, headers) => {
  return api(
    `infoProducts/update/?amount=${amount}&idProduct=${idProduct}`,
    "GET",
    null,
    headers
  );
};

export const getItemCurrentByIdProduct = (idProduct, headers) => {
  return api(
    `infoProducts/itemCurrent/?idProduct=${idProduct}`,
    "GET",
    null,
    headers
  );
};

export const getAllCategoryProduct = (headers) => {
  return api("categoryProductsAll", "GET", null, headers);
};

export const getAllGroupProduct = (headers) => {
  return api("groupProductsAll", "GET", null, headers);
};

export const getProductByCategory = (id, headers) => {
  return api(`getProductByCategory/${id}`, "GET", null, headers, headers);
};

export const getProductFilterByGroupProduct = (slug, query, headers) => {
  return api(
    `productsFilter?data=1&${slug ? "slugGroupProduct=" + slug : ""}${query}`,
    "GET",
    null,
    headers
  );
};

export const groupProductsBySlugCategory = (categorySlug, headers) => {
  return api(
    `groupProductsBySlugCategory/${categorySlug}`,
    "GET",
    null,
    headers
  );
};

export const updateReviewProduct = (idProduct, review, headers) => {
  return api(
    `infoProducts/review/update/?idProduct=${idProduct}&review=${review}`,
    "PUT",
    null,
    headers
  );
};
