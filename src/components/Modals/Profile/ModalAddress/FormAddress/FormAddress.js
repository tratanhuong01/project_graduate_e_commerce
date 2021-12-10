import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CreateAddress from "./CreateAddress/CreateAddress";
import TypeAddress from "./TypeAddress/TypeAddress";
import FooterFormAddress from "./FooterFormAddress/FooterFormAddress";
import WarningFormAddress from "./WarningFormAddress/WarningFormAddress";
import NameAndPhone from "./NameAndPhone/NameAndPhone";
import FullAddressContent from "./FullAddressContent/FullAddressContent";
import * as modalsAction from "../../../../../actions/modal/index";
import * as profileApi from "../../../../../api/profileApi";
import { useDispatch, useSelector } from "react-redux";
import InputFieldFC from "../../../../General/InputField/InputFieldFC";

function FormAddress(props) {
  const { address, setAddresses, returnProfile } = props;
  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required("Họ tên không được để trống!!"),
    phone: Yup.string().required("Số điện thoại không được để trống!!"),
    cityProvince: Yup.object(),
    district: Yup.object(),
    ward: Yup.object(),
    details: Yup.string().required("Địa chỉ cụ thể không được trống !!"),
    typeAddress: Yup.number().integer().default(0),
    isDefault: Yup.boolean(),
  });
  const [show, setShow] = useState(false);
  const {
    getValues,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    shouldUnregister: false,
  });

  const checkNull = () => {
    if (
      !getValues("cityProvince") &&
      !getValues("district") &&
      !getValues("wards")
    )
      return true;
    return false;
  };
  const generalContent = () => {
    if (checkNull()) return "Tỉnh/thành phố, Quận/huyện , Phường/xã";
    return `${getValues("cityProvince")
      ? "Tỉnh " + JSON.parse(getValues("cityProvince")).ProvinceName + " , "
      : ""
      }${getValues("district")
        ? JSON.parse(getValues("district")).DistrictName + " , "
        : ""
      }${getValues("wards") ? JSON.parse(getValues("wards")).WardName : ""}`;
  };
  const [fullAddress, setFullAddressData] = useState(generalContent());
  const setFullAddress = () => setFullAddressData(generalContent());
  useEffect(() => {
    //
    setValue("cityProvince", address ? address.cityProvince : null);
    setValue("district", address ? address.district : null);
    setValue("wards", address ? address.wards : null);
    setValue("details", address ? address.details : "");
    setValue("fullName", address ? address.fullName : "");
    setValue("phone", address ? address.phone : "");
    setValue("typeAddress", address ? address.typeAddress : 0);
    setValue("isDefault", address ? address.isDefault : 0);
    setFullAddress();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [isDefault, setIsDefault] = useState(address ? address.isDefault : 0);
  const { user, headers } = useSelector((state) => {
    return {
      user: state.user,
      headers: state.headers,
    };
  });
  const dispatch = useDispatch();
  const addAddress = async (data) => {
    const result = await profileApi.addAddressByIdUser(
      {
        id: address ? address.id : null,
        addressUser: user,
        cityProvince: JSON.stringify(data.cityProvince),
        district: JSON.stringify(data.district),
        wards: JSON.stringify(JSON.parse(data.wards)),
        details: data.details,
        infoAddress: data.details + " ," + generalContent(),
        statusAddress: 1,
        fullName: data.fullName,
        phone: data.phone,
        typeAddress: data.typeAddress,
        isDefault: data.isDefault ? 1 : 0,
      },
      headers
    );
    setAddresses([...result.data]);
    dispatch(modalsAction.closeModal());
  };

  return (
    <form onSubmit={handleSubmit(addAddress)}>
      <NameAndPhone
        setData={(key, value) => setValue(key, value)}
        errors={errors}
        register={register}
        setValue={setValue}
      />
      <div className="w-full my-1 px-2 relative">
        <FullAddressContent
          errors={errors}
          register={register}
          setValue={setValue}
          setShow={() => setShow(!show)}
          check={checkNull()}
          content={fullAddress}
          reset={() => {
            setValue("cityProvince", null);
            setValue("district", null);
            setValue("wards", null);
            setFullAddress();
          }}
        />
        {show && (
          <CreateAddress
            setFullAddress={setFullAddress}
            setProvince={(data) => setValue("cityProvince", data)}
            setDistrict={(data) => setValue("district", data)}
            setWards={(data) => setValue("wards", data)}
            setShow={() => setShow(false)}
          />
        )}
      </div>
      <div className="w-full my-4 px-2 relative z-10">
        <InputFieldFC
          type="text"
          className="w-full p-2.5 border-2 border-solid border-gray-300 dark:border-dark-third 
        text-gray-800 dark:text-white dark:bg-dark-third rounded-lg"
          placeHolder="Địa chỉ cụ thể.."
          register={register}
          onChange={() => ""}
          showError={errors["details"]}
          name="details"
        />
      </div>
      <WarningFormAddress />
      <TypeAddress
        setTypeAddress={(data) => setValue("typeAddress", data)}
        typeAddress={getValues("typeAddress")}
      />
      <div className="mx-3 my-5 flex font-semibold text-gray-600  dark:text-white">
        <input
          {...register("isDefault")}
          type="checkbox"
          className="transform scale-125 mr-3 mt-1.5"
          name="isDefault"
          onChange={(event) => {
            setIsDefault(event.target.checked ? 1 : 0);
            register("isDefault").onChange(event);
          }}
          checked={isDefault === 0 ? false : true}
        />
        Đặt làm địa chỉ mặc định
      </div>
      <hr className="mt-5" />
      <FooterFormAddress address={address} returnProfile={returnProfile} />
    </form>
  );
}

export default FormAddress;
