import React from "react";

function NotifyNumberProductSearch(props) {
  //
  const { number } = props;
  return (
    <p className="font-semibold text-3xl mt-3 mb-6">
      {number !== 0
        ? `CÓ ${number} KẾT QUẢ TÌM KIẾM PHÙ HỢP`
        : "KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN."}
    </p>
  );
}

export default NotifyNumberProductSearch;
