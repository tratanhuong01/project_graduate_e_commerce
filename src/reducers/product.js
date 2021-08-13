import * as Types from "../constants/ActionTypes";

const initialState = {
  modal: {
    amount: 0,
    idProduct: null,
    color: "",
    memory: "",
    productCurrent: null,
  },
  view: {
    amount: 0,
    idProduct: null,
    color: "",
    memory: "",
    productCurrent: null,
  },
  typeDisplay: 0,
  slug: "",
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOAD_PRODUCT_CHOOSE:
      if (action.data.typeDisplay === 0) state.view = action.data.data;
      else state.modal = action.data.data;
      state.typeDisplay = action.data.typeDisplay;
      return { ...state };
    case Types.CHANGE_MOUNT_PRODUCT_CHOOSE:
      if (action.typeDisplay === 0) state.view.amount = action.amount;
      else state.modal.amount = action.amount;
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
