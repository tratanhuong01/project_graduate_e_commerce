import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const addReviewProductByProduct = (idProduct, reviewProduct) => {
  //
  return api(`reviewProducts/${idProduct}`, "POST", reviewProduct, token);
  //
};

export const getAllReviewProductByProduct = (query, idProduct, star) => {
  //
  return api(
    star === -1 ? `${query}/${idProduct}` : `${query}/${idProduct}/${star}`,
    "GET",
    null,
    token
  );
  //
};

export const getReviewProductByProductMain = (idProduct) => {
  //
  return api(`reviewProductsAll/${idProduct}`, "GET", null, token);
  //
};

export const getReviewProductByProductLimitPage = (
  idProduct,
  active,
  offset,
  limit,
  all
) => {
  //
  const endPoint =
    active === -1
      ? `reviewProducts/${idProduct}${`/${offset}/${limit}`}`
      : `reviewProductByStar${all ? "All" : ""}/${idProduct}/${active}${
          all ? "" : `/${offset}/${limit}`
        }`;
  return api(endPoint, "GET", null, token);
  //
};

export const getReviewProductByProductLimitStar = (
  query,
  star,
  idProduct,
  offset,
  limit
) => {
  //
  return api(
    star === -1
      ? `${query}/${idProduct}/${offset}/${limit}`
      : `${query}/${idProduct}/${star}/${offset}/${limit}`,
    "GET",
    null,
    token
  );
  //
};
