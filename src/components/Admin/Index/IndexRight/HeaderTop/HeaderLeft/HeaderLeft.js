import React from "react";

function HeaderLeft(props) {
  return (
    <div class="w-1/4 text-center">
      <div class="w-10/12 mx-auto relative">
        <input
          type="text"
          class="my-4 items-center rounded-3xl py-2 px-4 bg-gray-200 w-full "
          placeholder="Tìm kiếm..."
        />
        <i class="bx bx-search absolute right-3 text-gray-600 top-1/3 text-xl"></i>
      </div>
    </div>
  );
}

export default HeaderLeft;
