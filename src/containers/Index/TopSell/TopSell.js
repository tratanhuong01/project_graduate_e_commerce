import React, { useState } from "react";
import ImageChildTopSell from "../../../components/Index/TopSell/ImageChildTopSell";
import ImageTopSell from "../../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../../components/Index/TopSell/InfoTopSell";

function TopSell(props) {
  //
  const { products } = props;
  const [image, setImage] = useState(products.image);
  //
  return (
    <>
      <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
        <>
          <ImageTopSell products={products} image={image} />
          <InfoTopSell products={products} />
        </>
      </div>
      <ImageChildTopSell
        image={image}
        setImage={setImage}
        products={products}
      />
    </>
  );
}

export default TopSell;
