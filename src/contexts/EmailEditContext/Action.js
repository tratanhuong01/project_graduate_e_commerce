import api from "../../Utils/api";
import * as constants from "./Constant";
import * as userApi from "../../api/userApi";

export const updateItem = (key, value) => {
    return {
        type: constants.UPDATE_ITEM,
        key,
        value
    }
}

export const checkEmailIssetRequest = async (email, user, headers, dispatch) => {
    dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: true });
    const result = await api(`searchUserByEmailOrPhone`, "POST", email, {
        ...headers,
        "Content-Type": "application/json",
    });
    if (!result.data) {
        dispatch(sendCodeEmail(email, user, headers, dispatch));
    }
    else {
        dispatch({ type: constants.UPDATE_ITEM, key: "errorEmail", value: result.data ? "Email đã được sử dụng !!" : "" });
        dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: false });
    }
}

export const sendCodeEmail = async (email, user, headers, dispatch) => {
    dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: true });
    user.email = email;
    const codeSent = await userApi.sendCodeEmail(user, headers);
    await api(
        `passwordResets`,
        "POST",
        {
            id: null,
            passwordResetUser: user,
            code: codeSent.data,
            timeCreated: null,
        },
        null
    );
    dispatch({ type: constants.UPDATE_ITEM, key: "code", value: codeSent.data })
    dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: false });
}