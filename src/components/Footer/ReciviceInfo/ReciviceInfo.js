import React from "react";

function ReciviceInfo(props) {
  return (
    <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto my-3 p-4 dark:text-gray-300">
      <div className="w-full md:w-5/12 pb-4 md:pb-0">
        <p className="text-4xl mb-2 text-gray-600 dark:text-gray-300">Email</p>
        <p className="text-gray-600 text-sm dark:text-gray-300">
          Gửi email để nhận thông tin khuyến mãi mới nhất
        </p>
      </div>
      <div className="w-full md:w-7/12 relative">
        <div className="w-full flex md:absolute md:top-1/2 md:transform md:-translate-y-1/2">
          <input
            type="text"
            className="w-4/5 border-2 border-solid border-gray-200  dark:bg-dark-second p-3 
            dark:border-dark-third text-white"
            placeholder="Nhập email..."
          />
          <button
            type="button"
            className="w-1/5 border-2 border-solid border-gray-200 dark:border-dark-third 
              p-3 font-semibold dark:bg-dark-main"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReciviceInfo;
