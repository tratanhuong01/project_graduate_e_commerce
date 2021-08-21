import { Form, Formik } from "formik";
import React, { Component } from "react";
import * as Yup from "yup";
import CreateAddress from "./CreateAddress/CreateAddress";
import TypeAddress from "./TypeAddress/TypeAddress";
import FooterFormAddress from "./FooterFormAddress/FooterFormAddress";
import WarningFormAddress from "./WarningFormAddress/WarningFormAddress";
import NameAndPhone from "./NameAndPhone/NameAndPhone";
import FullAddressContent from "./FullAddressContent/FullAddressContent";
import api from "../../../../../Utils/api";
import * as modalsAction from "../../../../../actions/modal/index";
import { connect } from "react-redux";

class FormAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      cityProvince:
        this.props.address === null
          ? { name: "" }
          : { name: this.props.address.cityProvince },
      district:
        this.props.address === null
          ? { name: "" }
          : { name: this.props.address.district },
      wards:
        this.props.address === null
          ? { name: "" }
          : { name: this.props.address.wards },
      details: this.props.address === null ? "" : this.props.address.details,
      fullName: this.props.address === null ? "" : this.props.address.fullName,
      numberPhone: this.props.address === null ? "" : this.props.address.phone,
      address:
        this.props.address === null
          ? {
              id: null,
              addressUser: null,
              cityProvince: "",
              district: "",
              wards: "",
              details: "",
              fullName: "",
              phone: "",
              statusAddress: 1,
              typeAddress: 2,
              isDefault: 0,
            }
          : this.props.address,
      typeAddress:
        this.props.address === null ? 0 : this.props.address.typeAddress,
      isDefault: this.props.address === null ? 0 : this.props.address.isDefault,
    };
  }
  addAddress = async (dataFormik) => {
    let data = this.state.address;
    data.addressUser = this.props.user;
    data.cityProvince = this.state.cityProvince.name;
    data.district = this.state.district.name;
    data.wards = this.state.wards.name;
    data.details = this.state.details;
    data.fullName = dataFormik.fullName;
    data.phone = dataFormik.numberPhone;
    data.typeAddress = this.state.typeAddress;
    data.isDefault = this.state.isDefault;
    const result = await api("addresses", "POST", data);
    this.setAddresses([...result.data]);
    this.props.closeModal();
  };
  setAddresses(addresses) {
    this.props.setAddresses(addresses);
  }
  checkNull() {
    if (
      this.state.cityProvince.name === "" &&
      this.state.district.name === "" &&
      this.state.wards.name === ""
    )
      return true;
    return false;
  }
  generalContent() {
    if (this.checkNull()) return "Tỉnh/thành phố, Quận/huyện , Phường/xã";
    return `${this.state.cityProvince.name + " , "}${
      this.state.district.name + " , "
    }${this.state.wards.name}`;
  }
  render() {
    const validationSchema = Yup.object().shape({
      fullName: Yup.string().required("Họ tên không được để trống!!"),
      numberPhone: Yup.string().required("Số điện thoại không được để trống!!"),
    });
    const { returnProfile } = this.props;
    return (
      <Formik
        enableReinitialize
        initialValues={{
          fullName: this.state.fullName,
          numberPhone: this.state.numberPhone,
        }}
        validationSchema={validationSchema}
        onSubmit={this.addAddress}
      >
        {(formikProps) => {
          const { values, handleChange, handleBlur } = formikProps;
          return (
            <Form>
              <NameAndPhone
                handleChange={handleChange}
                handleBlur={handleBlur}
                values={values}
                setData={(key, value) =>
                  this.setState({
                    [key]: value,
                  })
                }
              />
              <div className="w-full my-1 px-2 relative">
                <FullAddressContent
                  setShow={() =>
                    this.setState({
                      show: !this.state.show,
                    })
                  }
                  check={this.checkNull()}
                  content={this.generalContent()}
                  reset={(data) => this.setState(data)}
                />
                {this.state.show && (
                  <CreateAddress
                    setProvince={(data) =>
                      this.setState({
                        cityProvince: data,
                      })
                    }
                    setDistrict={(data) =>
                      this.setState({
                        district: data,
                      })
                    }
                    setWards={(data) =>
                      this.setState({
                        wards: data,
                      })
                    }
                    setShow={() =>
                      this.setState({
                        show: false,
                      })
                    }
                  />
                )}
              </div>
              <div className="w-full my-4 px-2 relative z-10">
                <input
                  type="text"
                  className="w-full p-2.5 border-2 border-solid border-gray-300 
                  text-gray-800 rounded-lg"
                  placeholder="Địa chỉ cụ thể.."
                  value={this.state.details}
                  onChange={(event) =>
                    this.setState({
                      details: event.target.value,
                    })
                  }
                />
              </div>
              <WarningFormAddress />
              <TypeAddress
                setTypeAddress={(data) =>
                  this.setState({
                    typeAddress: data,
                  })
                }
                typeAddress={this.state.typeAddress}
              />
              <div className="mx-3 my-5 flex font-semibold text-gray-600">
                <input
                  type="checkbox"
                  className="transform scale-125 mr-3 mt-1.5"
                  onChange={(event) =>
                    this.setState({
                      isDefault: event.target.checked ? 1 : 0,
                    })
                  }
                  name="isDefault"
                  checked={this.state.isDefault === 0 ? false : true}
                />
                Đặt làm địa chỉ mặc định
              </div>
              <hr className="mt-5" />
              <FooterFormAddress returnProfile={returnProfile} />
            </Form>
          );
        }}
      </Formik>
    );
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    closeModal: () => {
      dispatch(modalsAction.closeModal());
    },
  };
};
export default connect(null, mapDispatchToProps)(FormAddress);
