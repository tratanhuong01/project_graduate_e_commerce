import api from "../Utils/api";

export const deleteAddress = (idAddress, idUser) => {
  //
  return api(
    `addresses?idAddress=${idAddress}&idUser=${idUser}`,
    "DELETE",
    null
  );
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
  return api(`addresses?idUser=${address.addressUser.id}`, "POST", address);
  //
};

export const getBankByIdUser = (idUser) => {
  //
  return api(`banks/${idUser}`, "GET", null);
  //
};
