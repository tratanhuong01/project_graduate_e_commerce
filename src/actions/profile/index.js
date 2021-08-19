import * as Types from "../../constants/ActionTypes";

export const loadProfileMainRequest = () => {
  return (dispatch) => {
    dispatch(loadProfileMain());
  };
};
export const loadProfileMain = () => {
  return {
    type: Types.LOAD_PROFILE_MAIN,
  };
};
