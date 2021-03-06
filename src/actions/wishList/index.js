import * as Types from "../../constants/ActionTypes";
import { v4 as uuidv4 } from "uuid";
import * as wishListApi from "../../api/wishListApi";
import * as productApi from "../../api/productApi";

export const loadWishListRequest = (user, headers) => {
  return async (dispatch) => {
    if (!headers.Authorization) {
      if (localStorage && localStorage.getItem("wishLists"))
        dispatch(loadWishList(JSON.parse(localStorage.getItem("wishLists"))));
      else dispatch(loadWishList([]));
    } else {
      if (user) {
        try {
          const wishLists = await wishListApi.getAllWishListByIdUser(
            user.id,
            headers
          );
          dispatch(loadWishList(wishLists.data));
        } catch (error) {
          throw error;
        }
      } else {
        if (localStorage && localStorage.getItem("wishLists"))
          dispatch(loadWishList(JSON.parse(localStorage.getItem("wishLists"))));
        else dispatch(loadWishList([]));
      }
    }
  };
};

export const loadWishList = (wishLists) => {
  return {
    type: Types.LOAD_WISHLIST,
    wishLists,
  };
};

export const addWishListRequest = (data, headers) => {
  return async (dispatch) => {
    let formData = new FormData();
    formData.append("slug", data.idProduct);
    const result = await productApi.getProductFullByIdProduct(
      data.idProduct,
      headers
    );
    if (data.user === null) {
      let listWishList = [];
      if (localStorage && localStorage.getItem("wishLists")) {
        listWishList = JSON.parse(localStorage.getItem("wishLists"));
        let index = listWishList.findIndex(
          (item) => item.idProduct === data.idProduct
        );
        if (index === -1) {
          listWishList.push({
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
        } else listWishList.splice(index, 1);
      } else {
        listWishList.push({
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
      localStorage.setItem("wishLists", JSON.stringify(listWishList));
      dispatch(loadWishList(listWishList));
    } else {
      const wishListCheck = await wishListApi.checkWishList(
        data.user.id,
        data.idProduct,
        headers
      );
      if (wishListCheck.data === "" || wishListCheck.data === null) {
        const product = await productApi.getProductByIdProduct(
          data.idProduct,
          headers
        );
        const wishLists = await wishListApi.addWishListByIdUser(
          {
            id: 0,
            wishListUser: data.user,
            wishListProduct: product.data,
            amount: data.amount,
            timeCreated: "",
          },
          headers
        );
        dispatch(loadWishList(wishLists.data));
      } else {
        dispatch(
          deleteWishListRequest(
            {
              user: data.user,
              idCart: wishListCheck.data.id,
            },
            headers
          )
        );
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

export const deleteWishListRequest = (data, headers) => {
  return async (dispatch) => {
    if (data.user) {
      const result = await wishListApi.deleteWishListByIdUser(
        data.user.id,
        data.idCart,
        headers
      );
      dispatch(loadWishList(result.data));
    } else {
      let wishLists = JSON.parse(localStorage.getItem("wishLists"));
      if (wishLists.length === 1) {
        localStorage.removeItem("wishLists");
        dispatch(loadWishList([]));
      } else {
        const index = wishLists.findIndex(
          (wishList) => wishList.idCart === data.idCart
        );
        if (index !== -1) wishLists.splice(index, 1);
        localStorage.setItem("wishLists", JSON.stringify(wishLists));
        dispatch(loadWishList(wishLists));
      }
    }
  };
};
