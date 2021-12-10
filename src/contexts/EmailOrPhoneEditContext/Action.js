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

export const checkEmailOrPhoneIssetRequest = async (data, user, headers, dispatch, emailOrPhone) => {
    dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: true });
    const result = await api(`searchUserByEmailOrPhone`, "POST", data, {
        ...headers,
        "Content-Type": "application/json",
    });
    if (!result.data) {
        dispatch(sendCodeEmailOrPhone(data, user, headers, dispatch, emailOrPhone));
    }
    else {
        dispatch({ type: constants.UPDATE_ITEM, key: "errorEmail", value: result.data ? "Email đã được sử dụng !!" : "" });
        dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: false });
    }
}

export const sendCodeEmailOrPhone = async (data, user, headers, dispatch, emailOrPhone) => {
    dispatch({ type: constants.UPDATE_ITEM, key: "loadingSendCode", value: true });
    user[emailOrPhone.toLowerCase()] = data;
    let codeSent = "";
    if (emailOrPhone === "Email")
        codeSent = await userApi.sendCodeEmail(user, headers);
    else
        codeSent = await userApi.sendCodePhone(user, headers);
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