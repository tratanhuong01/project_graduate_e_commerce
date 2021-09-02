import api from "../Utils/api";

export const getAllWishListByIdUser = (idUser) => {
  //
  return api(`getAllWishListByIdUser/${idUser}`, "GET", null);
  //
};

export const checkWishList = (idUser, idProduct) => {
  //
  return api(`checkWishList/${idUser}/${idProduct}`, "GET", null);
  //
};

export const addWishListByIdUser = (wishList) => {
  //
  return api(`wishLists`, "POST", wishList);
  //
};

export const deleteWishListByIdUser = (idUser, idCart) => {
  //
  return api(`wishLists/${idUser}/${idCart}`, "DELETE", null);
  //
};
