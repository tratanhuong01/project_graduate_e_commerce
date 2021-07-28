import React, { Component } from "react";

class DescribeProduct extends Component {
  render() {
    return (
      <div className="w-full my-6 px-4">
        <p className="text-xl font-semibold text-gray-900">Mô tả sản phẩm</p>
        <p className="my-2">
          Phong cách, sắc sảo, và một biểu tượng trạng thái địa vị xã hội cho
          một số người, Apple Watch là một tiện ích mang tính cách mạng phát
          hành vào tháng năm 2014. Apple Watch cho phép người dùng kết nối với
          các trang web, trả lời tin nhắn, email, và các cuộc gọi, nghe nhạc, tổ
          chức phù hợp, tất cả chỉ vẻn vẹn 1,65 inch của màn hình. Apple Watch
          như sự mở rộng cho iPhone của bạn hơn là một tiện ích riêng biệt, bạn
          có thể tùy chỉnh nó theo cách của bạn, có trải nghiệm công nghệ hiện
          đại với Apple.
        </p>
        <div className="w-full my-3 flex justify-center">
          <img
            src="./images/product_3.png"
            className="w-full md:w-1/3 mx-auto"
            alt=""
          />
        </div>
        <p className="my-2 font-bold">Công nghệ đỉnh nhất</p>
        <p className="my-2">
          Apple Watch đột phá về kết nối, bất cứ khi nào, bất cứ nơi nào. Các
          tiện ích cho phép của bạn ở trên cộng thêm tất cả các phương tiện
          truyền thông xã hội các tài khoản, email và tin nhắn khác của bạn. Khi
          một thông báo đến, chạm đơn giản sẽ cung cấp cho bạn một cái nhìn
          nhanh chóng vào tin nhắn, cho phép bạn ứng phó với nó hay không. Việc
          Apple Watch giúp bạn cập nhật trên lịch của bạn, hoạt động, mail và
          điện thoại của bạn, phát hiện các thư đến và cuộc gọi. Bạn cũng có thể
          ứng phó nhanh chóng với họ mà không cần mở thiết bị điện thoại hay
          laptop. Một văn bản duy nhất, hãy chạm hoặc để cho Siri làm tất cả
          công việc, tất cả những điều này trong một phụ kiện nhỏ là đồng hồ đeo
          tay đẳng cấp.
        </p>
        <p className="my-2 font-bold">Chăm sóc sức khỏe cho bạn</p>
        <p className="my-2">
          Với sự phổ biến ngày càng tăng nhu cầu chăm sóc sức khỏe và tập thể
          dục, Apple Watch có tính năng đó sẽ giúp bạn thúc đẩy hoạt động hiệu
          quả. Chiếc đồng hồ này có ứng dụng hoạt động độc quyền, nó cung cấp
          một bản chụp của các hoạt động hàng ngày của bạn: ví dụ như đứng, di
          chuyển, và tập thể dục. Mục tiêu của ứng dụng này là để giúp bạn hoàn
          thành mục tiêu hoạt động vào cuối ngày.
        </p>
      </div>
    );
  }
}

export default DescribeProduct;
