import React from "react";
import { Link } from "react-router-dom";
import * as Config from "../../../../constants/Config";

function NewsLeft(props) {
  //
  let { news__view, newData, subClass } = props;
  const dataDemo = {
    id: 8,
    userNews: {
      id: "2000000000",
      firstName: "Trà",
      lastName: "Writer",
      birthday: "10-01-2001 00:00:00",
      sex: "Nam",
      email: "adminnews@gmail.com",
      phone: "0354114665",
      password: "8F4B4F8D10B7606B8F65F50259A4B3AC",
      codeEmail: "",
      codePhone: "",
      isVerifyEmail: 0,
      isVerifyPhone: 0,
      type: 1,
      timeCreated: "08-11-2021 13:58:01",
    },
    categoryNews: {
      id: "TINCONGNGHE",
      nameCategoryNews: "Bảng tin công nghệ",
      typeCategoryNews: 0,
    },
    title:
      "Điện thoại gập Galaxy Z Flip 3 5G ra mắt: Chip 888 mạnh mẽ, giá không tưởng..",
    thumbnail:
      "https://bizweb.dktcdn.net/100/420/160/articles/letgo-1280x720-800-resize-1487-1624210692.jpeg?v=1628696754563",
    describeSmall:
      "Hôm nay ngày 11/08, Samsung đã tổ chức sự kiện Unpacked ra mắt Galaxy Z Flip3 - mẫu smartphone cao cấp mới nhất của hãng. Vậy chiếc máy này có gì mới? Cấu hình ra sao và mức giá như thế nào? Hãy cùng DĐTM tổng hợp trong bài viết này nhé.",
    timeCreated: "08-14-2021 14:26:12",
    view: 0,
    content:
      '<p></p>\r\n<img src="https://bizweb.dktcdn.net/100/420/160/files/letgo-1280x720-800-resize-1487-1624210692-jpeg-812740da-18f1-43ca-83a1-49af3a0b9b57.jpg?v=1628696778833" alt="undefined" style="height: 300px;width: 400px"/>\r\n<p style="text-align:left;"><span style="color: rgb(28,28,28);background-color: rgb(255,255,255);font-size: 20px;font-family: sans-serif, Arial;"><strong>Galaxy Z Flip 3 sở hữu thiết kế gập độc đáo, màn hình dẻo 120Hz mượt mà</strong></span><strong> </strong></p>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Galaxy Z Flip 3 sở hữu thiết kế gập vỏ sò quen thuộc giống thế hệ cũ nhưng hãng không quên nâng cấp ở kích thước bên ngoài lên 1.9 inch độ phân giải 512x260 pixel để mang lại không gian hiển thị lớn hơn ( Galaxy Z Flip 2 chỉ là 1.1 inch).  </span>&nbsp;</p>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Màn hình chính Z Flip 3 được trang bị công nghệ Dynamic AMOLED 6,7 inch giống như thế hệ cũ, độ phân giải 2640 x 1080px, màn hình có tần số quét 120Hz để bạn luôn bắt kịp theo xu hướng. Máy trang bị kính cường lực Gorilla Glass Victus của Corning hạn chế tốt việc trầy xước và nứt vỡ.</span>&nbsp;</p>\r\n<p></p>\r\n<img src="https://bizweb.dktcdn.net/100/420/160/files/tong-hop-tin-don-samsung-galaxy-z-flip-3-5-jpeg.jpg?v=1628696316240" alt="undefined" style="height: 400px;width: 800px"/>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Bản lề của Galaxy Z Flip 3 được thiết kế chắc chắn và có độ bền tốt với khả năng mở 200.000 lần nhờ khung viền hợp kim nhôm aluminum chắc chắn. Như vậy, mỗi ngày bạn mở và đóng nó khoảng 100 lần, thì bạn có thể sử dụng nó trong 5 năm. Thiết bị cũng được xếp hạng IPX8 về khả năng chống nước.</span>&nbsp;</p>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Khác với những thiết bị Samsung khác, Z Flip 3 không có cảm biến vân tay trong màn hình. Năm nay hãng tích hợp mở khoá vân tay kèm với nút nguồn ở cạnh bên chiếc điện thoại gập của mình để người dùng thuận tiện hơn trong quá trình sử dụng. Máy có 3 phiên bản màu sắc bao gồm : Phantom Black, Xanh Phantom và Tím Lilac</span>&nbsp;</p>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Bạn có cảm nhận thế nào về thiết kế năm nay của dòng Galaxy Z Flip ? Hãy để lại comment bên dưới chia sẻ với chúng mình nhé.</span>&nbsp;</p>\r\n<p></p>\r\n<img src="https://bizweb.dktcdn.net/100/420/160/files/thie-t-ke-kho-ng-te-n-4.jpg?v=1628694893639" alt="undefined" style="height: 500px;width: 700px"/>\r\n<p style="text-align:left;"><span style="color: rgb(28,28,28);background-color: rgb(255,255,255);font-size: 20px;font-family: sans-serif, Arial;"><strong>Giá bán Galaxy Z Flip 3 </strong></span><strong> </strong></p>\r\n<p><span style="color: rgb(20,20,20);background-color: rgb(255,255,255);font-size: 16px;font-family: sans-serif, Arial;">Z Flip 3 ra mắt với mức giá khởi điểm từ 999$ cho phiên bản Ram 8/128GB tương đương khoảng 22 triệu vnđ. Trong khi phiên bản Ram 8/ 256GB là 1049$ tương đương 23.9 triệu vnđ.</span>&nbsp;</p>\r\n',
    slug: "dien-thoai-gap-galaxy-z-flip-3-5g-ra-mat-chip-888-manh-me-gia-khong-tuong",
  };
  newData = typeof newData !== "undefined" ? newData : dataDemo;
  //
  return (
    <div
      className={`w-full mt-3 relative news__left cursor-pointer ${subClass}`}
    >
      <img
        src={newData.thumbnail}
        className="w-full max-h-148 h-full object-cover"
        alt=""
      />
      <div
        className={`absolute bottom-0 left-0 w-full bg-transparent p-3 
        bg-black bg-opacity-50 ${news__view}`}
      >
        <Link
          to={`${Config.PAGE_NEWS}/${newData.slug}`}
          className="font-semibold text-gray-100"
        >
          {newData.title}
        </Link>
        <div className="flex">
          <button className="mt-2 bg-organce px-5 py-1.5 rounded-full text-sm text-gray-100 font-semibold">
            {newData.categoryNews.nameCategoryNews}
          </button>
          <span className="text-gray-100 font-semibold flex items-center text-sm mx-4">
            {newData.timeCreated}
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewsLeft;
