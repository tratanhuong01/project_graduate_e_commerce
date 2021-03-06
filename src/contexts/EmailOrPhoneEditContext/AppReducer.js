import * as constants from "./Constant";

const AppReducer = (state, action) => {
    switch (action.type) {
        case constants.UPDATE_ITEM:
            return { ...state, [action.key]: action.value };
        default:
            return { ...state };
    }
}
export default AppReducer;