import React from "react";

function FormInfoPayment(props) {
  //
  const { address } = props;
  //
  return (
    <form action="" method="post" className="w-full dark:text-white">
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Họ và tên"
        value={address ? address.fullName : ""}
        onChange={() => ""}
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Số điện thoại"
        value={address ? address.phone : ""}
        onChange={() => ""}
      />
      <input
        type="text"
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        placeholder="Địa chỉ"
        value={address ? address.details : ""}
        onChange={() => ""}
      />
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
        onChange={() => ""}
      >
        <option value="">{address ? address.cityProvince : ""}</option>
      </select>
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
      >
        <option value="">{address ? address.district : ""}</option>
      </select>
      <select
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 dark:bg-dark-third 
        dark:border-dark-third"
      >
        <option value="">{address ? address.wards : ""}</option>
      </select>
      <textarea
        className="w-full p-2.5 rounded-lg mb-3 border-2 border-solid border-gray-200 resize-none h-20 dark:bg-dark-third dark:border-dark-third"
        name=""
        placeholder="Ghi chú (tùy chọn).."
      ></textarea>
      <div className="w-full flex my-1 justify-end">
        <span className="px-1 py-1 text-organce font-semibold rounded-lg cursor-pointer">
          Thay đổi địa chỉ khác
        </span>
      </div>
    </form>
  );
}

export default FormInfoPayment;
