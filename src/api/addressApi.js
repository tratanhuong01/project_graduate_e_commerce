import axios from "axios";
import {
  SHOP_ID,
  TOKEN,
  URL_API_GHN_ORDER_DELIVERY_TIME,
  URL_API_GHN_ORDER_SERVICE,
  URL_API_GNH_ADDRESS,
  URL_API_GNH_ORDER_FEE,
} from "../constants/Config";

export const getAddress = (data) => {
  return axios({
    method: "POST",
    url: `${URL_API_GNH_ADDRESS}${data.name}`,
    data: data.data,
    headers: { token: TOKEN },
  });
};

export const getSerivce = (data) => {
  return axios({
    method: "POST",
    url: `${URL_API_GHN_ORDER_SERVICE}`,
    data: {
      shop_id: SHOP_ID,
      from_district: 2239,
      to_district: data.districtTo,
    },
    headers: { token: TOKEN, "Content-Type": "application/json" },
  });
};

export const calcalatorFee = (data) => {
  return axios({
    method: "POST",
    url: `${URL_API_GNH_ORDER_FEE}`,
    data: {
      from_district_id: 2239,
      service_id: data.ServiceID,
      service_type_id: null,
      to_district_id: data.districtTo,
      to_ward_code: data.WardCode,
      height: 15,
      length: 15,
      weight: 100,
      width: 20,
      insurance_fee: 10000,
      coupon: null,
    },
    headers: { token: TOKEN },
  });
};

export const calcalatorDeliveryTime = (data) => {
  return axios({
    method: "POST",
    url: URL_API_GHN_ORDER_DELIVERY_TIME,
    data: {
      from_district_id: 2239,
      to_district_id: data.districtTo,
      to_ward_code: data.WardCode,
      service_id: data.ServiceID,
    },
    headers: { token: TOKEN },
  });
};
