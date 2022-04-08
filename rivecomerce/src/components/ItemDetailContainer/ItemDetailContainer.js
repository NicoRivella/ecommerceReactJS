import { GetProduct } from '../../mocks/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import React, { useState, useEffect } from 'react';

const ItemDeailContainer  = () => {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        GetProduct(1)
        .then((product) => setProduct(product))
        .catch((error) => console.log(error));
    }, []);

    return (
        <ItemDetail {...product} ></ItemDetail>  
    ) 
}

export default ItemDeailContainer