import api from "../Utils/api";

export const deleteAddress = (idAddress, idUser, headers) => {
  //
  return api(
    `addresses?idAddress=${idAddress}&idUser=${idUser}`,
    "DELETE",
    null,
    headers
  );
  //
};

export const getAddressByIdUser = (idUser, headers) => {
  //
  return api(`addresses/${idUser}`, "GET", null, headers);
  //
};

export const setDefaultAddressByIdUser = (idUser, idAddress, headers) => {
  //
  return api(`setDefaultAddress/${idUser}/${idAddress}`, "PUT", null, headers);
  //
};

export const addAddressByIdUser = (address, headers) => {
  //
  return api(
    `addresses?idUser=${address.addressUser.id}`,
    "POST",
    address,
    headers
  );
  //
};

export const getBankByIdUser = (idUser, headers) => {
  //
  return api(`banks/${idUser}`, "GET", null, headers);
  //
};
