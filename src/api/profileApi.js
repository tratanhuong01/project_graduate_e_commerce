import api from "../Utils/api";

export const deleteAddress = (id) => {
  //
  return api(`addresses/${id}`, "DELETE", null);
  //
};

export const getAddressByIdUser = (idUser) => {
  //
  return api(`addresses/${idUser}`, "GET", null);
  //
};

export const setDefaultAddressByIdUser = (idUser, idAddress) => {
  //
  return api(`setDefaultAddress/${idUser}/${idAddress}`, "PUT", null);
  //
};

export const addAddressByIdUser = (address) => {
  //
  return api("addresses", "POST", address);
  //
};

export const getBankByIdUser = (idUser) => {
  //
  return api(`banks/${idUser}`, "GET", null);
  //
};
