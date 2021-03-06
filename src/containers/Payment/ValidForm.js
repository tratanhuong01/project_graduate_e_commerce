import * as Yup from "yup";
import { REGEX_NUMBER_PHONE } from "../../constants/Config";

export const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Họ tên không được để trống!!"),
  phone: Yup.string()
    .required("Số điện thoại không được để trống !!")
    .matches(REGEX_NUMBER_PHONE, "Số điện thoại không đúng định dạng !!"),
  email: Yup.string()
    .required("Email không được để trống !!")
    .email("Email không đúng định dạng !!"),
  address: Yup.string().required("Địa chỉ không được để trống!!"),
});
