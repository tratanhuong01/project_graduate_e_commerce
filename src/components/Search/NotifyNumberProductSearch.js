import React, { Component } from "react";

class NotifyNumberProductSearch extends Component {
  render() {
    return (
      <p className="font-semibold text-3xl mt-3 mb-6">
        {this.props.number !== 0
          ? `CÓ ${this.props.number} KẾT QUẢ TÌM KIẾM PHÙ HỢP`
          : "KHÔNG TÌM THẤY BẤT KỲ KẾT QUẢ NÀO VỚI TỪ KHÓA TRÊN."}
      </p>
    );
  }
}

export default NotifyNumberProductSearch;
