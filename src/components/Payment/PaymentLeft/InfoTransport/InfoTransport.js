import React from "react";

function InfoTransport(props) {
  //
  const { address, note } = props;
  //
  return (
    <>
      <div className="w-full h-10">
        <div className="float-left font-semibold text-xl">Vận chuyển</div>
      </div>
      <div className="my-3 w-full font-semibold text-gray-900 dark:text-gray-300">
        {address ? (
          <>
            <div className="w-full py-0.5 flex">
              <div className="flex items-center">
                Họ Tên : {`${address.fullName}`}
              </div>
            </div>
            <div className="flex items-center my-0.5">
              Số điện thoại : {address.phone}
            </div>
            <div className="flex py-0.5 items-center">
              <ul className="flex">
                Địa chỉ :
                {` ${address.details} , 
                ${address.wards} ,  
                ${address.district} , 
                ${address.cityProvince}`}
              </ul>
            </div>
            <p className="my-1 break-words">{`Ghi chú : ${note}`}</p>
          </>
        ) : (
          <div
            className="w-full my-3 p-3 bg-organce rounded-lg text-center text-white 
                        font-semibold text-xm"
          >
            Vui lòng nhập thông tin giao hàng
          </div>
        )}
      </div>
    </>
  );
}

export default InfoTransport;
