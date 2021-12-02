import React, { useEffect, useState } from 'react'
import CategoryProduct from '../../../components/General/CategoryProduct/CategoryProduct';
import api from '../../../Utils/api';

export default function ProductByCategory(props) {
    //
    const [productByCategoryList, setPrductByCategoryList] = useState(null);
    useEffect(() => {
        //
        let unmounted = false;
        const fetch = async () => {
            const result = await api(`getProductByCategoryIndex`, 'GET', null, {});
            if (unmounted) return;
            setPrductByCategoryList(result.data);
        }
        fetch();
        return () => {
            unmounted = true;
        }
        //
    }, []);
    //
    return (
        productByCategoryList ? productByCategoryList.map((listProduct, index) => {
            return listProduct.listProductCategory.length <= 0 ? (
                ""
            ) : (
                <CategoryProduct products={listProduct} key={index} />
            );
        })
            : ""
    )
}
