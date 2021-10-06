import api from "../Utils/api";

export const addReviewProductByProduct = (
  idProduct,
  reviewProduct,
  headers
) => {
  //
  return api(`reviewProducts/${idProduct}`, "POST", reviewProduct, headers);
  //
};

export const getAllReviewProductByProduct = (
  query,
  idProduct,
  star,
  headers
) => {
  //
  return api(
    star === -1 ? `${query}/${idProduct}` : `${query}/${idProduct}/${star}`,
    "GET",
    null,
    headers
  );
  //
};

export const getReviewProductByProductMain = (idProduct, headers) => {
  //
  return api(`reviewProductsAll/${idProduct}`, "GET", null, headers);
  //
};

export const getReviewProductByProductLimitPage = (
  idProduct,
  active,
  offset,
  limit,
  all,
  headers
) => {
  //
  const endPoint =
    active === -1
      ? `reviewProducts/${idProduct}${`/${offset}/${limit}`}`
      : `reviewProductByStar${all ? "All" : ""}/${idProduct}/${active}${
          all ? "" : `/${offset}/${limit}`
        }`;
  return api(endPoint, "GET", null, headers);
  //
};

export const getReviewProductByProductLimitStar = (
  query,
  star,
  idProduct,
  offset,
  limit,
  headers
) => {
  //
  return api(
    star === -1
      ? `${query}/${idProduct}/${offset}/${limit}`
      : `${query}/${idProduct}/${star}/${offset}/${limit}`,
    "GET",
    null,
    headers
  );
  //
};
