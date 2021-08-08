import * as Types from "../../../constants/admin/ActionTypes";

export const handleCategory = (data) => {
  return {
    type: Types.HANDLE_CATEGORY,
    data,
  };
};
