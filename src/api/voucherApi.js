import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const checkDiscountCodeValid = (code) => {
  return api(`discountCodes/check/valid/?code=${code}`, "GET", null, token);
};

export const checkDiscountCodeIsUsed = (code, idUser) => {
  return api(
    `discountCodes/check/isUsed/?code=${code}&idUser=${idUser}&isUsed=1`,
    "GET",
    null,
    token
  );
};

export const getDiscountCodeByIdUser = (idUser, isUsed, data) => {
  return api(
    `discountCodeUsers?idUser=${idUser}&isUsed=${isUsed}&type=${data}`,
    "GET",
    null,
    token
  );
};
