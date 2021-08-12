import * as Types from "../../constants/ActionTypes";

export const loadOrder = (order) => {
  return {
    type: Types.LOAD_ORDER,
    order,
  };
};
