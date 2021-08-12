import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import { v4 as uuidv4 } from "uuid";
import * as modalsAction from "../../actions/modal/index";

export const loadCartRequest = (user) => {
  return async (dispatch) => {
    if (user === null) {
      if (localStorage && localStorage.getItem("carts"))
        dispatch(loadCart(JSON.parse(localStorage.getItem("carts"))));
      else dispatch(loadCart([]));
    } else {
      const carts = await api(`getAllCartByIdUser/${user.id}`, "GET", null);
      dispatch(loadCart(carts.data));
    }
  };
};

export const loadCart = (carts) => {
  return {
    type: Types.LOAD_CART,
    carts,
  };
};

export const addCartRequest = (data) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("slug", data.idProduct);
    const result = await api("getProductById", "POST", formData);
    if (data.user === null) {
      let listCart = [];
      if (localStorage && localStorage.getItem("carts")) {
        listCart = JSON.parse(localStorage.getItem("carts"));
        let index = listCart.findIndex(
          (item) => item.idProduct === data.idProduct
        );
        if (index === -1) {
          listCart.push({
            idCart: uuidv4(),
            amount: data.amount,
            brand: result.data.brand,
            color: result.data.color,
            idLineProduct: result.data.idLineProduct,
            idProduct: result.data.idProduct,
            image: result.data.image,
            memory: result.data.memory,
            nameLineProduct: result.data.nameLineProduct,
            priceInput: result.data.priceInput,
            priceOutput: result.data.priceOutput,
            sale: result.data.sale,
            slug: result.data.slug,
          });
        } else listCart[index].amount += data.amount;
      } else {
        listCart.push({
          idCart: uuidv4(),
          amount: data.amount,
          brand: result.data.brand,
          color: result.data.color,
          idLineProduct: result.data.idLineProduct,
          idProduct: result.data.idProduct,
          image: result.data.image,
          memory: result.data.memory,
          nameLineProduct: result.data.nameLineProduct,
          priceInput: result.data.priceInput,
          priceOutput: result.data.priceOutput,
          sale: result.data.sale,
          slug: result.data.slug,
        });
      }
      localStorage.setItem("carts", JSON.stringify(listCart));
      dispatch(loadCart(listCart));
    } else {
      const cartCheck = await api(
        `checkCart/${data.user.id}/${data.idProduct}`,
        "GET",
        null
      );
      console.log(cartCheck);
      if (cartCheck.data === "" || cartCheck.data === null) {
        const product = await api(`products/${data.idProduct}`, "GET", null);
        const cart = {
          id: 0,
          userCart: data.user,
          productCart: product.data,
          amount: data.amount,
          timeCreated: "",
        };
        const carts = await api("carts", "POST", cart);
        dispatch(loadCart(carts.data));
      } else {
        let formData = new FormData();
        formData.append("amount", data.amount + cartCheck.data.amount);
        formData.append("idUser", data.user.id);
        formData.append("idCart", cartCheck.data.id);
        const carts = await api("updateCart", "PUT", formData);
        dispatch(loadCart(carts.data));
      }
    }
    window.scrollTo(0, 0);
    dispatch(modalsAction.openModalAddedCurrent(result.data));
  };
};

export const addCart = (data) => {
  return {
    type: Types.ADD_CART,
    data,
  };
};

export const deleteCartRequest = (data) => {
  return async (dispatch) => {
    if (data.user) {
      let formData = new FormData();
      formData.append("idUser", data.user.id);
      formData.append("idCart", data.idCart);
      const result = await api(`carts`, "DELETE", formData);
      dispatch(loadCart(result.data));
    } else {
      let carts = JSON.parse(localStorage.getItem("carts"));
      if (carts.length === 1) {
        localStorage.removeItem("carts");
        dispatch(loadCart([]));
      } else {
        const index = carts.findIndex((cart) => cart.idCart === data.idCart);
        if (index !== -1) carts.splice(index, 1);
        localStorage.setItem("carts", JSON.stringify(carts));
        dispatch(loadCart(carts));
      }
    }
  };
};

export const changeAmountCartRequest = (data) => {
  return async (dispatch) => {
    if (data.user) {
      let formData = new FormData();
      formData.append("amount", data.amount);
      formData.append("idUser", data.user.id);
      formData.append("idCart", data.idCart);
      const carts = await api("updateCart", "PUT", formData);
      dispatch(loadCart(carts.data));
    } else {
      let listCart = JSON.parse(localStorage.getItem("carts"));
      let index = listCart.findIndex((item) => item.idCart === data.idCart);
      if (index !== -1) listCart[index].amount = data.amount;
      localStorage.setItem("carts", JSON.stringify(listCart));
      dispatch(loadCart(listCart));
    }
  };
};
