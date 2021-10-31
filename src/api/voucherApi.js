import api from "../Utils/api";

export const checkDiscountCodeValid = (code, headers) => {
  return api(`discountCodes/check/valid/?code=${code}`, "GET", null, headers);
};

export const checkDiscountCodeIsUsed = (code, idUser, headers) => {
  return api(
    `discountCodes/check/isUsed/?code=${code}&idUser=${idUser}`,
    "GET",
    null,
    headers
  );
};

export const getDiscountCodeByIdUser = (idUser, isUsed, data, headers) => {
  return api(
    `discountCodeUsers?idUser=${idUser}&isUsed=${isUsed}&type=${data}`,
    "GET",
    null,
    headers
  );
};
