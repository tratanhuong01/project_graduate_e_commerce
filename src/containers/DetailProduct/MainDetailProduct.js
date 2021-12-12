import React, { useEffect } from "react";
import LevelUrl from "../../components/General/LevelUrl/LevelUrl";
import ProductView from "./ProductView/ProductView";
import DescribeProduct from "../../components/DetailProduct/ProductView/DescribeProduct/DescribeProduct";
import NewsDetailProduct from "../../components/DetailProduct/ProductView/NewsDetailProduct/NewsDetailProduct";
import RateComment from "../../components/DetailProduct/ProductView/RateComment/RateComment";
import TechnicalDataSmall from "../../components/DetailProduct/ProductView/TechnicalDataSmall/TechnicalDataSmall";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { PAGE_DETAIL_PRODUCT } from "../../constants/Config";
import ProductSame from "../../components/DetailProduct/ProductSame/ProductSame";
function MainDetailProduct(props) {
  //
  const { products, slug } = props;
  //
  useEffect(() => {
    //
    document.title = products.nameLineProduct;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //
  return (
    <div className="w-full bg-gray-100 dark:bg-dark-second">
      <BreadcrumbsItem to={PAGE_DETAIL_PRODUCT}>
        Chi tiết sản phẩm
      </BreadcrumbsItem>
      <BreadcrumbsItem to={`${PAGE_DETAIL_PRODUCT}/${products.slug}`}>
        {products.nameLineProduct +
          ` ${products.memory ? products.memory.nameMemory + " " : ""}${products.color
            ? "Màu " + products.color.description.toLowerCase()
            : ""
          }`}
      </BreadcrumbsItem>
      <LevelUrl />
      <div className="w-full xl:w-4/5 mx-auto p-4 bg-white dark:bg-dark-second dark:text-white">
        <ProductView products={products} />
        <div className="w-full flex my-5 lg:flex-row flex-col">
          <div className="w-full lg:w-7/12">
            <DescribeProduct products={products} />
            <RateComment products={products} slug={slug} />
          </div>
          <div className="w-full lg:w-5/12 ml-5">
            <TechnicalDataSmall products={products} />
            <NewsDetailProduct />
          </div>
        </div>
      </div>
      <ProductSame />
    </div>
  );
}

export default MainDetailProduct;
