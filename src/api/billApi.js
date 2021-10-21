import api from "../Utils/api";

export const addBill = (bill, headers) => {
  return api("bills", "POST", bill, headers);
};

export const addBillDetail = (billDetail, headers) => {
  return api("billDetails", "POST", billDetail, headers);
};

export const getBillMain = (type, idUser, headers) => {
  return api(`billsAll?type=${type}&idUser=${idUser}`, "GET", null, headers);
};

export const getBillLimit = (type, idUser, index, limit, headers) => {
  return api(
    `bills?type=${type}&idUser=${idUser}&offset=${
      index * limit
    }&limit=${limit}`,
    "GET",
    null,
    headers
  );
};

export const cancelBill = (idBill, headers) => {
  return api(
    `bills/update/status/?idBill=${idBill}&status=-1`,
    "GET",
    null,
    headers
  );
};

export const getBillById = (id) => {
  return api(`bills/${id}`, "GET", null);
};

export const searchBillMain = (keyword, idUser, headers) => {
  return api(
    `bills/search/?keyword=${keyword}&idUser=${idUser}&type=${-2}&offset=${0}&limit=5&type=${0}`,
    "GET",
    null,
    headers
  );
};

export const searchBillLimit = (keyword, idUser, index, limit, headers) => {
  return api(
    `bills/search/?keyword=${keyword}&idUser=${idUser}&offset=${
      index * limit
    }&limit=${limit}&type=${0}`,
    "GET",
    null,
    headers
  );
};
