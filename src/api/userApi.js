import api from "../Utils/api";

export const addUser = (user, headers) => {
  //
  return api("users", "POST", user, {
    ...headers,
    "Content-Type": "application/json",
  });
  //
};

export const sendCodeEmail = (user, headers) => {
  //
  return api("sendCodeEmail", "POST", user, headers);
  //
};

export const getTeleSupport = (headers) => {
  return api(`getTeleSupport`, "GET", null, headers);
};

export const getUserByIdUser = (idUser, headers) => {
  return api(`users/${idUser}`, "GET", null, headers);
};

export const checkLoginJWT = (data, headers) => {
  return api(`checkLoginJWT`, "POST", data, headers);
};

export const getInfoUserFromTokenJWT = (headers) => {
  return api(`getUserFromJWT`, "POST", headers.Authorization, headers);
};
