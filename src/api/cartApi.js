import api from "../Utils/api";

const token =
  localStorage && localStorage.getItem("userToken")
    ? { Authorization: localStorage.getItem("userToken") }
    : {};

export const getAllCartByIdUser = (idUser) => {
  //
  return api(`carts/${idUser}/user`, "GET", null, token);
  //
};

export const checkCart = (idUser, idProduct) => {
  //
  return api(`check-cart/${idUser}/${idProduct}`, "GET", null, token);
  //
};

export const updateCartByIdUser = (data) => {
  //
  let formData = new FormData();
  formData.append("amount", data.amount);
  formData.append("idUser", data.idUser);
  formData.append("idCart", data.idCart);
  return api("update-cart", "PUT", formData, token);
  //
};

export const deleteCartByIdUser = (data) => {
  //
  let formData = new FormData();
  formData.append("idUser", data.user.id);
  formData.append("idCart", data.idCart);
  return api(`carts`, "DELETE", formData);
  //
};

export const addCartByIdUser = (cart) => {
  //
  return api("carts", "POST", cart, token);
  //
};
