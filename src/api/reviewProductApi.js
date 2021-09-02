import api from "../Utils/api";

export const addReviewProductByProduct = (idProduct, reviewProduct) => {
  //
  return api(`reviewProducts/${idProduct}`, "POST", reviewProduct);
  //
};

export const getAllReviewProductByProduct = (query, idProduct, star) => {
  //
  return api(
    star === -1 ? `${query}/${idProduct}` : `${query}/${idProduct}/${star}`,
    "GET",
    null
  );
  //
};

export const getReviewProductByProductMain = (idProduct) => {
  //
  return api(`reviewProductsAll/${idProduct}`, "GET", null);
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
  return api(
    active === -1
      ? `reviewProducts/${idProduct}${all ? `/${offset}/${limit}` : ""}`
      : `reviewProductByStar${all ? "All" : ""}/${idProduct}/${active}${
          all ? "" : `/${offset}/${limit}`
        }`,
    "GET",
    null
  );
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
    null
  );
  //
};
