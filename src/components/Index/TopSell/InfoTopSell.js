import React, { Component } from "react";
import { Link } from "react-router-dom";
import TitleMain from "../../General/TitleMain/TitleMain";
import * as Config from "../../../constants/Config";
class InfoTopSell extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="w-full md:w-1/2 px-4">
        <TitleMain Content={"TOP BÁN CHẠY"} />
        <p className="text-2xl hover:text-organce font-semibold pt-5">
          <Link to={`${Config.PAGE_DETAIL_PRODUCT}/${product.Path}`}>
            {product.NameProduct}
          </Link>
        </p>
        <p className="pt-5">
          |&nbsp;&nbsp;
          <span className="text-gray-500 text-xm">Thương Hiệu : </span>
          &nbsp;{product.BrandProduct}&nbsp;&nbsp;|&nbsp;&nbsp;
          <span className="text-gray-500 text-xm">Bảo hành : </span>
          12 tháng
        </p>
        <p className="py-7 text-organce text-4xl">
          {new Intl.NumberFormat("ban", "id").format(
            product.Price.Price * ((100 - product.Price.Sale) / 100)
          )}{" "}
          <u>đ</u>
        </p>
        <p className="py-1">Kích thước màn hình: 1.65"</p>
        <p className="py-1">Độ phân giải màn hình: 390 x 312pixels</p>
        <p className="py-1">Luôn hiển thị: Không</p>
        <p className="py-1">Mật độ điểm ảnh : 303pixels</p>
        <p className="py-1">Multi-touch: Có</p>
        <p className="py-1">Loại màn hình: AMOLED</p>
      </div>
    );
  }
}

export default InfoTopSell;
