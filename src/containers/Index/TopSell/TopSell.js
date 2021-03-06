import React, { useState, useEffect } from "react";
import ImageChildTopSell from "../../../components/Index/TopSell/ImageChildTopSell";
import ImageTopSell from "../../../components/Index/TopSell/ImageTopSell";
import InfoTopSell from "../../../components/Index/TopSell/InfoTopSell";
import api from "../../../Utils/api";

function TopSell(props) {
  //
  const [products, setProducts] = useState(null);
  const [image, setImage] = useState(null);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let unmounted = false;
    const fetch = async () => {
      const result = await api(`getProductTopSell`, 'GET', null, {});
      const resultImage = await api(`getImageByIdLineProduct?idLineProduct=${result.data ? result.data.idLineProduct :
        ""}`, 'GET', null, {});
      if (unmounted) return;
      setProducts(result.data);
      setImage(result.data ? result.data.image : null);
      setImages(resultImage.data);
    }
    fetch();
    return () => {
      unmounted = true;
    }
  }, [])
  //
  return (
    products && image ? <>
      <div className="xl:w-3/4 md:w-11/12 w-full mx-auto md:flex flex-col md:flex-row">
        <>
          <ImageTopSell products={products} image={image} />
          <InfoTopSell products={products} />
        </>
      </div>
      <ImageChildTopSell
        images={images}
        image={image}
        setImage={setImage}
        products={products}
      />
    </> : ""
  );
}

export default TopSell;
