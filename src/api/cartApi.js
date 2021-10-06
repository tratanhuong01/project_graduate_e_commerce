import api from "../Utils/api";

export const getAllCartByIdUser = (idUser, headers) => {
  //
  return api(`carts/${idUser}/user`, "GET", null, headers);
  //
};

export const checkCart = (idUser, idProduct, headers) => {
  //
  return api(`check-cart/${idUser}/${idProduct}`, "GET", null, headers);
  //
};

export const updateCartByIdUser = (data, headers) => {
  //
  let formData = new FormData();
  formData.append("amount", data.amount);
  formData.append("idUser", data.idUser);
  formData.append("idCart", data.idCart);
  return api("update-cart", "PUT", formData, headers);
  //
};

export const deleteCartByIdUser = (data, headers) => {
  //
  let formData = new FormData();
  formData.append("idUser", data.user.id);
  formData.append("idCart", data.idCart);
  return api(`carts`, "DELETE", formData, headers);
  //
};

export const addCartByIdUser = (cart, headers) => {
  //
  return api("carts", "POST", cart, headers);
  //
};
