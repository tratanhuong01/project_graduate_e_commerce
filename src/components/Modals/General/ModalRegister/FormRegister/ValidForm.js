import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  id: Yup.string(),
  firstName: Yup.string().required("Họ không được để trống !!"),
  lastName: Yup.string().required("Tên không được để trống !!"),
  email: Yup.string()
    .required("Email không được để trống !!")
    .email("Email không đúng định dạng !!"),
  phone: Yup.string()
    .matches(Config.REGEX_NUMBER_PHONE, "Số điện thoại không đúng định dạng !!")
    .required("Số điện thoại không được để trống !!"),
  birthday: Yup.date().required("Ngày sinh không được để trống !!"),
  password: Yup.string()
    .min(6, "Mật khẩu phải tối đa 6 kí tự !!")
    .required("Mật khẩu không được để trống !!"),
  type: Yup.number().integer().default(0),
  codeEmail: Yup.string(),
  codePhone: Yup.string(),
  isVerifyEmail: Yup.number().integer().default(0),
  isVerifyPhone: Yup.number().integer().default(0),
  userRole: Yup.object().default({
    id: "CUSTOMER",
    nameRole: "Khách hàng",
    typeRole: 0,
    timeCreated: "10-04-2021 08:05:05",
  }),
  timeCreated: Yup.date(),
});
export default validationSchema;
