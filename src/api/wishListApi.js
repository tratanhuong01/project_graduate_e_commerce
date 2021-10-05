import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const getAllWishListByIdUser = (idUser) => {
  //
  return api(`getAllWishListByIdUser/${idUser}`, "GET", null, token);
  //
};

export const checkWishList = (idUser, idProduct) => {
  //
  return api(`checkWishList/${idUser}/${idProduct}`, "GET", null, token);
  //
};

export const addWishListByIdUser = (wishList) => {
  //
  return api(`wishLists`, "POST", wishList, token);
  //
};

export const deleteWishListByIdUser = (idUser, idCart) => {
  //
  return api(`wishLists/${idUser}/${idCart}`, "DELETE", token);
  //
};
