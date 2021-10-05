import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const deleteAddress = (idAddress, idUser) => {
  //
  return api(
    `addresses?idAddress=${idAddress}&idUser=${idUser}`,
    "DELETE",
    null,
    token
  );
  //
};

export const getAddressByIdUser = (idUser) => {
  //
  return api(`addresses/${idUser}`, "GET", null, token);
  //
};

export const setDefaultAddressByIdUser = (idUser, idAddress) => {
  //
  return api(`setDefaultAddress/${idUser}/${idAddress}`, "PUT", null, token);
  //
};

export const addAddressByIdUser = (address) => {
  //
  return api(
    `addresses?idUser=${address.addressUser.id}`,
    "POST",
    address,
    token
  );
  //
};

export const getBankByIdUser = (idUser) => {
  //
  return api(`banks/${idUser}`, "GET", null, token);
  //
};
