import api from "../Utils/api";

export const getAllWishListByIdUser = (idUser, headers) => {
  //
  return api(`getAllWishListByIdUser/${idUser}`, "GET", null, headers);
  //
};

export const checkWishList = (idUser, idProduct, headers) => {
  //
  return api(`checkWishList/${idUser}/${idProduct}`, "GET", null, headers);
  //
};

export const addWishListByIdUser = (wishList, headers) => {
  //
  return api(`wishLists`, "POST", wishList, headers);
  //
};

export const deleteWishListByIdUser = (idUser, idCart, headers) => {
  //
  return api(`wishLists/${idUser}/${idCart}`, "DELETE", null, headers);
  //
};
