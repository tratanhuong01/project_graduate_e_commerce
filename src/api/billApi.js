import api from "../Utils/api";


export const addBill = (bill) => {
  return api("bills", "POST", bill);
};

export const addBillDetail = (billDetail) => {
  return api("billDetails", "POST", billDetail);
};

export const getBillMain = (type, idUser) => {
  return api(`billsAll?type=${type}&idUser=${idUser}`, "GET", null);
};

export const getBillLimit = (type, idUser, index, limit) => {
  return api(
    `bills?type=${type}&idUser=${idUser}&offset=${
      index * limit
    }&limit=${limit}`,
    "GET",
    null
  );
};

export const cancelBill = (idBill) => {
  return api(`bills/update/status/?idBill=${idBill}&status=-1`, "GET", null);
};

export const searchBillMain = (keyword, idUser) => {
  return api(
    `bills/search/?keyword=${keyword}&idUser=${idUser}&type=${-2}&offset=${0}&limit=5&type=${0}`,
    "GET",
    null
  );
};

export const searchBillLimit = (keyword, idUser, index, limit) => {
  return api(
    `bills/search/?keyword=${keyword}&idUser=${idUser}&offset=${
      index * limit
    }&limit=${limit}&type=${0}`,
    "GET",
    null
  );
};
