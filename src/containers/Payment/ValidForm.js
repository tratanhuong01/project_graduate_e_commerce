import * as Yup from "yup";
import { REGEX_NUMBER_PHONE } from "../../constants/Config";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Họ tên không được để trống!!"),
  phone: Yup.string().matches(
    REGEX_NUMBER_PHONE,
    "Số điện thoại không đúng định dạng !!"
  ),
  address: Yup.string().required("Địa chỉ không được để trống!!"),
});
