import * as Types from "../../constants/ActionTypes";
import api from "../../Utils/api";
import { v4 as uuidv4 } from "uuid";

export const loadWishListRequest = (user) => {
  return async (dispatch) => {
    if (user === null) {
      if (localStorage && localStorage.getItem("wishLists"))
        dispatch(loadWishList(JSON.parse(localStorage.getItem("wishLists"))));
      else dispatch(loadWishList([]));
    } else {
      const wishLists = await api(
        `getAllWishListByIdUser/${user.id}`,
        "GET",
        null
      );
      dispatch(loadWishList(wishLists.data));
    }
  };
};

export const loadWishList = (wishLists) => {
  return {
    type: Types.LOAD_WISHLIST,
    wishLists,
  };
};

export const addWishListRequest = (data) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("slug", data.idProduct);
    const result = await api("getProductById", "POST", formData);
    if (data.user === null) {
      let listWishList = [];
      if (localStorage && localStorage.getItem("wishLists")) {
        listWishList = JSON.parse(localStorage.getItem("wishLists"));
        let index = listWishList.findIndex(
          (item) => item.idProduct === data.idProduct
        );
        if (index === -1) {
          listWishList.push({
            idWishList: uuidv4(),
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
        } else listWishList[index].amount += data.amount;
      } else {
        listWishList.push({
          idWishList: uuidv4(),
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
      localStorage.setItem("wishLists", JSON.stringify(listWishList));
      dispatch(loadWishList(listWishList));
    } else {
      const wistListCheck = await api(
        `checkWishList/${data.user.id}/${data.idProduct}`,
        "GET",
        null
      );
      if (wistListCheck.data === "" || wistListCheck.data === null) {
        const product = await api(`products/${data.idProduct}`, "GET", null);
        const wishList = {
          id: 0,
          userWishList: data.user,
          productWishList: product.data,
          amount: data.amount,
          timeCreated: "",
        };
        const wishLists = await api("wishLists", "POST", wishList);
        dispatch(loadWishList(wishLists.data));
      } else {
        let formData = new FormData();
        formData.append("amount", data.amount + wistListCheck.data.amount);
        formData.append("idUser", data.user.id);
        formData.append("idWishList", wistListCheck.data.id);
        const wishLists = await api("updateWishList", "PUT", formData);
        dispatch(loadWishList(wishLists.data));
      }
    }
  };
};

export const addWishList = (data) => {
  return {
    type: Types.ADD_WISHLIST,
    data,
  };
};

export const deleteWishListRequest = (data) => {
  return async (dispatch) => {
    if (data.user) {
      const result = await api(
        `wishLists/${data.user.id}/${data.idWishList}`,
        "DELETE",
        null
      );
      dispatch(loadWishList(result.data));
    } else {
      let wishLists = JSON.parse(localStorage.getItem("wishLists"));
      if (wishLists.length === 1) {
        localStorage.removeItem("wishLists");
        dispatch(loadWishList([]));
      } else {
        const index = wishLists.findIndex(
          (wishList) => wishList.idWishList === data.idWishList
        );
        if (index !== -1) wishLists.splice(index, 1);
        localStorage.setItem("wishLists", JSON.stringify(wishLists));
        dispatch(loadWishList(wishLists));
      }
    }
  };
};
