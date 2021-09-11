import * as Types from "../../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
import * as modalsAction from "../../actions/modal/index";
import * as cartApi from "../../api/cartApi";
import * as productApi from "../../api/productApi";

export const loadCartRequest = (user) => {
  return async (dispatch) => {
    if (user === null)
      if (localStorage && localStorage.getItem("carts"))
        dispatch(loadCart(JSON.parse(localStorage.getItem("carts"))));
      else dispatch(loadCart([]));
    else {
      const carts = await cartApi.getAllCartByIdUser(user.id);
      dispatch(loadCart(carts.data, true));
    }
  };
};

export const loadCart = (carts, status) => {
  return {
    type: Types.LOAD_CART,
    carts,
    status,
  };
};

export const addCartRequest = (data) => {
  return async (dispatch) => {
    const result = await productApi.getProductFullByIdProduct(data.idProduct);
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
      } else
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
      localStorage.setItem("carts", JSON.stringify(listCart));
      dispatch(loadCart(listCart));
    } else {
      const cartCheck = await cartApi.checkCart(data.user.id, data.idProduct);
      if (cartCheck.data === "" || cartCheck.data === null) {
        const product = await productApi.getProductByIdProduct(data.idProduct);
        const cart = await cartApi.addCartByIdUser({
          id: 0,
          userCart: data.user,
          productCart: product.data,
          amount: data.amount,
          timeCreated: "",
        });
        dispatch(loadCart(cart.data));
      } else {
        const carts = await cartApi.updateCartByIdUser({
          amount: data.amount + cartCheck.data.amount,
          idUser: data.user.id,
          idCart: cartCheck.data.id,
        });
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
      const result = await cartApi.deleteCartByIdUser(data);
      dispatch(loadCart(result.data));
    } else {
      let carts = JSON.parse(localStorage.getItem("carts"));
      if (carts.length === 1) {
        localStorage.removeItem("carts");
        dispatch(loadCart([]));
      } else {
        carts = carts.filter((cart) => cart.idCart !== data.idCart);
        localStorage.setItem("carts", JSON.stringify(carts));
        dispatch(loadCart(carts));
      }
    }
  };
};

export const changeAmountCartRequest = (data) => {
  return async (dispatch) => {
    if (data.user) {
      const carts = await cartApi.updateCartByIdUser({
        amount: data.amount,
        idUser: data.user.id,
        idCart: data.idCart,
      });
      dispatch(loadCart(carts.data));
    } else {
      let listCart = JSON.parse(localStorage.getItem("carts"));
      let index = listCart.findIndex((item) => item.idCart === data.idCart);
      if (index !== -1) listCart[index].amount = data.amount;
      localStorage.setItem("carts", JSON.stringify(listCart));
      dispatch(loadCart(listCart, data.status));
    }
  };
};

export const loadCartMain = (carts) => {
  return {
    type: Types.LOAD_CART_MAIN,
    carts,
  };
};

export const loadMoneyCart = (carts) => {
  return {
    type: Types.LOAD_MONEY_CART,
    carts,
  };
};
