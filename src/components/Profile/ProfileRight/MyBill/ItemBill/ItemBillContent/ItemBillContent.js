import React from "react";
import { Link } from "react-router-dom";

function ItemBillContent(props) {
  //
  const { cost } = props;
  //
  return (
    <>
      <div className="w-full flex items-center text-gray-600">
        <div className="w-2/3 flex items-center">
          <img
            src="https://cf.shopee.vn/file/30cfbf2972827fc710796675e7c4f281"
            alt=""
            className="w-24 h-24 p-1 rounded-lg object-over"
          />
          <div className="flex ml-4 flex-col">
            <Link to="" className="mb-1 font-semibold hover:text-organce">
              Iphone 12 pro max 512GB chính hãng VN
            </Link>
            <p>Số lương : 1</p>
            <p>Màu : Đen</p>
          </div>
        </div>
        <div className="w-1/3 flex items-center justify-end">60.000đ</div>
      </div>
      {!cost && (
        <div
          className="w-full flex my-2 py-3 flex items-center 
          justify-end text-organce font-semibold"
        >
          <span className="bx bx-check-shield text-2xl mr-3"></span>
          <span className="text-gray-600 mr-3">Tổng số tiền :</span>
          <span className="text-2xl">76.000 đ</span>
        </div>
      )}
    </>
  );
}

export default ItemBillContent;
