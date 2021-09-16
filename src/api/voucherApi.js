import api from "../Utils/api";

export const checkDiscountCodeValid = (code) => {
  return api(`discountCodes/check/valid/?code=${code}`, "GET", null);
};

export const checkDiscountCodeIsUsed = (code, idUser) => {
  return api(
    `discountCodes/check/isUsed/?code=${code}&idUser=${idUser}&isUsed=1`,
    "GET",
    null
  );
};

export const getDiscountCodeByIdUser = (idUser, isUsed, data) => {
  return api(
    `discountCodeUsers?idUser=${idUser}&isUsed=${isUsed}&type=${data}`
  );
};
