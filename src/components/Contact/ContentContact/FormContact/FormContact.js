import React from "react";

function FormContact(props) {
  return (
    <div className="w-full xl:w-2/3 xl:pr-6">
      <p className="font-semibold text-3xl mb-2">Liên hệ với chúng tôi</p>
      <p className="text-xm text-gray-700">
        Để liên hệ và nhận các thông in khuyến mại sớm nhất, xin vui lòng điền
        đầy đủ thông tin của bạn vào form dưới đây. Chúng tôi sẽ liên lạc lại
        với bạn trong thời gian sớm nhất
      </p>
      <form className="w-full my-4 py-2" action="" method="">
        <div className="w-full my-6 flex">
          <input
            type="text"
            placeholder="Họ tên"
            className="w-1/2 mr-5 p-3 rounded-full border-2 border-solid border-gray-200"
          />
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-1/2 mr-5 p-3 rounded-full border-2 border-solid border-gray-200"
          />
        </div>
        <div className="w-full mb-6 flex">
          <input
            type="text"
            placeholder="Email"
            className="w-full mr-5 p-3 rounded-full border-2 border-solid border-gray-200"
          />
        </div>
        <div className="w-full mb-6 flex">
          <textarea
            placeholder="Email"
            className="w-full mr-5 p-3 rounded-xl border-2 border-solid border-gray-200 
            resize-none h-32 max-h-32"
          ></textarea>
        </div>
        <button
          type="button"
          className="w-32 p-3 rounded-full text-white bg-organce font-semibold hover:bg-white 
          border-2 border-solid border-white hover:border-organce hover:text-gray-900 mt-4"
        >
          Gửi liên hệ
        </button>
      </form>
    </div>
  );
}

export default FormContact;
