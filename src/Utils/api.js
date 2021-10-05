import axios from "axios";
import * as Config from "../constants/Config";

export function apiCrud(endPoint, method = "GET", body, headers) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endPoint}`,
    data: body,
    headers: headers,
  });
}
export function apiGet(endPoint, method = "GET", body, headers) {
  return axios({
    method: method,
    url: `${Config.API_URL}/getData/${endPoint}`,
    data: body,
    headers: headers,
  });
}
export default function api(endPoint, method = "GET", body, headers) {
  return axios({
    method: method,
    url: `${Config.API_URL}/${endPoint}`,
    data: body,
    headers: headers,
  });
}
