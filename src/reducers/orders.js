import * as Types from "../constants/ActionTypes";

const initialState = {
  list: [],
  money: 0,
  voucher: null,
  fee: 23500,
  sale: 0,
  infoPayment: {
    address: "",
    cityProvince: null,
    district: null,
    ward: null,
    note: "",
    status: false,
    fullName: "",
    phone: "",
    email: "",
  },
  paymentMethod: 0,
  outOfStock: false,
  listOutOfStock: [],
  service: [],
  serviceChoose: null,
  loading: true,
  addressCount: 0,
  deliveryTime: null,
};

const myReducer = (state = initialState, action) => {
  let sum = 0;
  switch (action.type) {
    case Types.LOAD_ORDER:
      action.orders.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      state.list = action.orders;
      return { ...state };
    case Types.LOAD_MONEY_ORDER:
      action.orders.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      return { ...state };
    case Types.LOAD_INFO_ADDRESS_PAYMENT:
      if (action.address) {
        state.infoPayment.cityProvince = action.address.cityProvince;
        state.infoPayment.district = action.address.district;
        state.infoPayment.ward = action.address.wards;
        state.infoPayment.address = action.address.details;
        state.infoPayment.fullName = action.address.fullName;
        state.infoPayment.phone = action.address.phone;
        state.infoPayment.email = action.email;
        state.infoPayment.status = true;
        state.sale = 0;
      } else {
        state.sale = 0;
        state.infoPayment = {
          address: "",
          cityProvince: null,
          district: null,
          ward: null,
          note: "",
          status: false,
          fullName: "",
          phone: action.email,
          email: ""
        };
      }
      state.addressCount = 1;
      return { ...state };
    case Types.UPDATE_ADDRESS_PAYMENT:
      let count = 0;
      for (const obj in state.infoPayment)
        if (state.infoPayment.hasOwnProperty(obj))
          if (obj !== "status")
            if (
              state.infoPayment[obj] !== "" &&
              state.infoPayment[obj] !== null
            )
              count++;
      if (count === 5) state.infoPayment.status = true;

      switch (action.index) {
        case 0:
          state.infoPayment.cityProvince = action.item;
          state.infoPayment.district = null;
          state.infoPayment.ward = null;
          break;
        case 1:
          state.infoPayment.district = action.item;
          state.infoPayment.ward = null;
          break;
        case 2:
          state.infoPayment.ward = action.item;
          break;
        case 3:
          state.infoPayment.address = action.item;
          break;
        case 4:
          state.infoPayment.note = action.item;
          break;
        case 5:
          state.infoPayment.fullName = action.item;
          break;
        case 6:
          state.infoPayment.phone = action.item;
          break;
        case 7:
          state.infoPayment.email = action.item;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.CHECK_ORDERS_IS_OUT_OF_STOCK:
      state.loading = false;
      state.outOfStock = action.orders.length > 0 ? true : false;
      state.listOutOfStock = action.orders;
      return { ...state };
    case Types.UPDATE_ORDER_IS_OUT_OF_STOCK:
      state.list = action.list;
      state.outOfStock = false;
      state.listOutOfStock = [];
      action.list.forEach((element) => {
        sum +=
          element.priceOutput * ((100 - element.sale) / 100) * element.amount;
      });
      state.money = sum;
      return { ...state };
    case Types.UPDATE_VOUCHER_ORDERS:
      if (action.remove) {
        state.voucher = null;
        state.sale = 0;
      } else {
        state.voucher = action.voucher;
        if (action.voucher) {
          switch (action.voucher.discountCode.type) {
            case 0:
              state.sale = state.fee;
              break;
            case 1:
              state.sale = action.voucher.discountCode.max;
              break;
            default:
              break;
          }
        }
      }
      return { ...state };
    case Types.UPDATE_FEE_OR_SERVICE_ORDER:
      switch (action.mode) {
        case 0:
          state.service = action.data;
          break;
        case 1:
          state.fee = action.data;
          break;
        case 2:
          state.serviceChoose = action.data;
          break;
        case 3:
          state.deliveryTime = action.data;
          break;
        default:
          break;
      }
      return { ...state };
    case Types.LOAD_INFO_USER_PAYMENT:
      if (action.user) {
        state.infoPayment.address = "";
        state.infoPayment.fullName = `${action.user.firstName} ${action.user.lastName}`;
        state.infoPayment.email = action.user.email;
        state.infoPayment.phone = action.user.phone;
        state.addressCount = 0;
      }
      return { ...state };
    default:
      return state;
  }
};

export default myReducer;
