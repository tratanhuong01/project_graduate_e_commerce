import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import api from '../../../Utils/api';
import CategoryProduct from '../../General/CategoryProduct/CategoryProduct';

export default function ProductSame() {
    //
    const product = useSelector((state) => state.product);
    const [productList, setProductList] = useState({ listProductCategory: [], idCategoryProduct: "product__same" });
    useEffect(() => {
        //
        let unmounted = false;
        if (product.view.productCurrent) {
            const fetch = async () => {
                const result = await api(
                    `getProductSame?idProduct=${product.view.productCurrent.idProduct}&idGroupProduct=${product.view.productCurrent.idGroupProduct}`,
                    'GET',
                    null,
                    {}
                );
                if (unmounted) return;
                setProductList({ listProductCategory: result.data, idCategoryProduct: "product__same" });
            }
            fetch();
        }
        return () => {
            unmounted = true;
        }
        //
    }, [product.view.productCurrent])
    //
    return (
        productList.listProductCategory.length > 0 && <CategoryProduct products={productList}
            title="Sản phẩm tương tự" />
    )
}
