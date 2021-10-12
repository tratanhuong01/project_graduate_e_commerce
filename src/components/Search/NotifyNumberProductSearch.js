import React from "react";

function NotifyNumberProductSearch(props) {
  //
  const { length } = props;
  return (
    <p className="font-semibold text-2xl p-2 py-5 bg-white mt-3 mb-6">
      {`CÓ ${length} KẾT QUẢ TÌM KIẾM PHÙ HỢP`}
    </p>
  );
}

export default NotifyNumberProductSearch;
