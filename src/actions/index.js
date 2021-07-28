import * as Types from "../constants/ActionTypes";
import api from "../Utils/api";

export const getAllProductRequest = () => {
  return (dispatch) => {
    return api("products", "GET", {})
      .then((res) => {
        dispatch(getAllProduct(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const viewScrollProduct = () => {
  return {
    type: Types.VIEW_SCROLL_PRODUCT,
  };
};
export const scrollTop = () => {
  return {
    type: Types.SCROLL_TOP,
  };
};
export const getAllProduct = (products) => {
  return {
    type: Types.GET_ALL_PRODUCT,
    products,
  };
};

export const onMouseEnterEventImage = (data) => {
  return {
    type: Types.HOVER_IMAGE_EVENT_DP,
    data,
  };
};
export const chooseSizeProduct = (data) => {
  return {
    type: Types.CHOOSE_SIZE_PRODUCT,
    data,
  };
};
export const ascOrDescNumberProduct = (number) => {
  return {
    type: Types.ASC_OR_DESC_NUMBER_PRODUCT,
    number,
  };
};

export const setModalDefault = () => {
  return {
    type: Types.SET_MODAL_DEFAULT,
  };
};

export const viewProduct = (slug, products, user) => {
  return {
    type: Types.VIEW_PRODUCT,
    slug,
    products,
    user,
  };
};
export const resetDetailProduct = () => {
  return {
    type: Types.RESET_DETAIL_PRODUCT,
  };
};
export const getAllCartRequest = (user) => {
  return (dispatch) => {
    if (user === null || typeof user === "undefined") {
      if (localStorage && localStorage.getItem("carts")) {
        dispatch(getAllCart(JSON.parse(localStorage.getItem("carts"))));
      } else {
        dispatch(getAllCart([]));
      }
    } else {
      return api("carts", "GET", {})
        .then((res_1) => {
          var myData = [];
          if (res_1.data.length > 0)
            res_1.data.forEach((item) => {
              if (item.IDKhachHang === user.id) {
                var data = {
                  cart: item,
                  product: null,
                };
                api("products/" + item.IDProduct, "GET", {})
                  .then((res_2) => {
                    data.product = res_2.data;
                    myData.push(data);
                    dispatch(getAllCart(myData));
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
          else {
            dispatch(getAllCart([]));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};

export const getAllCart = (carts) => {
  return {
    type: Types.GET_ALL_CART,
    carts,
  };
};
export const addCartRequest = (cart, product, user) => {
  return (dispatch) => {
    cart.Color = cart.Color === "" ? product.UrlImage[0].Color : cart.Color;
    cart.Size = cart.Size === "" ? product.SizeProduct[0].Size : cart.Size;
    if (user === null) {
      api(`products/${cart.IDProduct}`, "GET", {})
        .then((res) => {
          var myData = {
            cart: cart,
            product: res.data,
          };
          if (localStorage && localStorage.getItem("carts")) {
            var cartLS = JSON.parse(localStorage.getItem("carts"));
            var max = cartLS[0].cart.id;
            var index =
              cartLS.length === 1
                ? 0
                : cartLS.findIndex((item) => item.cart.id > max);
            cart.id = cartLS[index].cart.id + 1;
            myData = { cart: cart, product: res.data };
            cartLS.push(myData);
            localStorage.setItem("carts", JSON.stringify(cartLS));
            dispatch(addCart(myData));
          } else {
            cart.id = 0;
            myData = { cart: cart, product: res.data };
            localStorage.setItem("carts", JSON.stringify([myData]));
            dispatch(addCart(myData));
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return api("carts", "POST", cart)
        .then((res_1) => {
          var myData = {
            cart: res_1.data,
            product: null,
          };
          api(`products/${res_1.data.IDProduct}`, "GET", {})
            .then((res_2) => {
              myData.product = res_2.data;
              dispatch(addCart(myData));
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
export const addCart = (cart) => {
  return {
    type: Types.ADD_CART,
    cart,
  };
};
export const showModalAddCartCurrent = (cart, product) => {
  return {
    type: Types.SHOW_MODAL_ADD_CART_CURRENT,
    product,
    cart,
  };
};
export const closeModal = () => {
  return {
    type: Types.CLOSE_MODAL,
  };
};
export const openCategory = () => {
  return {
    type: Types.OPEN_CATEGORY,
  };
};
export const deleteCartByIDRequest = (id, user) => {
  return (dispatch) => {
    if (user === null) {
      var cartLS = JSON.parse(localStorage.getItem("carts"));
      var index = cartLS.findIndex((item) => item.cart.id === id);
      if (cartLS.length === 1) {
        localStorage.removeItem("carts");
      } else {
        cartLS.splice(index, 1);
        localStorage.setItem("carts", JSON.stringify(cartLS));
      }
      dispatch(deleteCartByID(id));
    } else {
      return api(`carts/${id}`, "DELETE", {})
        .then((res) => {
          dispatch(deleteCartByID(id));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
export const deleteCartByID = (id) => {
  return {
    type: Types.DELETE_CART_BY_ID,
    id,
  };
};
export const viewFastProduct = (product) => {
  return {
    type: Types.VIEW_FAST_PRODUCT,
    product,
  };
};
export const openModalFastViewProduct = (product, slug = null) => {
  return {
    type: Types.OPEN_VIEW_FAST_PRODUCT,
    product,
    slug,
  };
};
export const updateCartIssetRequest = (cart, user) => {
  return (dispatch) => {
    if (user === null) {
      var cartLS = JSON.parse(localStorage.getItem("carts"));
      var index = cartLS.findIndex((item) => item.cart.id === cart.id);
      cartLS[index].cart.NumberChoose =
        cartLS[index].cart.NumberChoose + cart.NumberChoose;
      localStorage.setItem("carts", JSON.stringify(cartLS));
      dispatch(updateCartIsset(cartLS[index].cart));
    } else {
      return api(`carts/${cart.id}`, "GET", {})
        .then((res_1) => {
          api(`carts/${cart.id}`, "PUT", {
            IDProduct: cart.IDProduct,
            IDKhachHang: cart.IDKhachHang,
            Color: cart.Color,
            Size: cart.Size,
            NumberChoose:
              Number(cart.NumberChoose) + Number(res_1.data.NumberChoose),
          })
            .then((res_2) => {
              dispatch(updateCartIsset(res_2.data));
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
export const updateCartIsset = (cart) => {
  return {
    type: Types.UPDATE_CART_ISSET,
    cart,
  };
};
export const updateCartRequest = (cart, user) => {
  return (dispatch) => {
    if (user === null) {
      var cartLS = JSON.parse(localStorage.getItem("carts"));
      var index = cartLS.findIndex((item) => item.cart.id === cart.id);
      cartLS[index].cart.NumberChoose = cart.NumberChoose;
      localStorage.setItem("carts", JSON.stringify(cartLS));
      dispatch(updateCart(cartLS[index].cart));
    } else {
      return api(`carts/${cart.id}`, "PUT", {
        IDProduct: cart.IDProduct,
        IDKhachHang: cart.IDKhachHang,
        Color: cart.Color,
        Size: cart.Size,
        NumberChoose: cart.NumberChoose,
      })
        .then((res) => {
          dispatch(updateCart(res.data));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
};
export const updateCart = (cart) => {
  return {
    type: Types.UPDATE_CART,
    cart,
  };
};
export const getProductTopSell = (products) => {
  return {
    type: Types.GET_PRODUCT_TOP_SELL,
    products,
  };
};
export const getAllBrandProduct = (products) => {
  return {
    type: Types.GET_ALL_BRAND_PRODUCT,
    products,
  };
};
export const getAllColorProduct = (products) => {
  return {
    type: Types.GET_ALL_COLOR_PRODUCT,
    products,
  };
};
export const getAllSizeProduct = (products) => {
  return {
    type: Types.GET_ALL_SIZE_PRODUCT,
    products,
  };
};
export const filterProductBrand = (products, brand) => {
  return {
    type: Types.FILTER_PRODUCT_BRAND,
    products,
    brand,
  };
};
export const filterProductColor = (products, color) => {
  return {
    type: Types.FILTER_PRODUCT_COLOR,
    products,
    color,
  };
};
export const filterProductSize = (products, size) => {
  return {
    type: Types.FILTER_PRODUCT_SIZE,
    products,
    size,
  };
};
export const filterProductPrice = (products, price) => {
  return {
    type: Types.FILTER_PRODUCT_PRICE,
    products,
    price,
  };
};
export const loadProductPageProduct = (products) => {
  return {
    type: Types.LOAD_PRODUCT_PAGE_PRODUCT,
    products,
  };
};
export const openModalLogin = () => {
  return {
    type: Types.OPEN_MODAL_LOGIN,
  };
};
export const openModalRegister = () => {
  return {
    type: Types.OPEN_MODAL_REGISTER,
  };
};
export const getAllUsersRequest = () => {
  return (dispatch) => {
    return api("users", "GET", {})
      .then((res) => {
        dispatch(getAllUsers(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const getAllUsers = (users) => {
  return {
    type: Types.GET_ALL_USERS,
    users,
  };
};
export const addUserRequest = (user) => {
  return (dispatch) => {
    api("users", "POST", user)
      .then((res) => {
        dispatch(addUser(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export const addUser = (user) => {
  return {
    type: Types.ADD_USER,
    user,
  };
};
export const checkHaveLogin = () => {
  return {
    type: Types.CHECK_HAVE_LOGIN,
  };
};
export const saveUserLogin = (user) => {
  return {
    type: Types.SAVE_USER_LOGIN,
    user,
  };
};
export const logoutUser = () => {
  return {
    type: Types.LOGOUT_USER,
  };
};

export const searchProduct = (products, keyword) => {
  return {
    type: Types.SEARCH_PRODUCT,
    products,
    keyword,
  };
};
