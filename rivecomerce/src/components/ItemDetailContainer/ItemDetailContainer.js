import { GetProduct } from '../../mocks/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDeailContainer  = () => {
    const [product, setProduct] = useState([]);

    const {productId} = useParams()
  
    useEffect(() => {
        GetProduct(productId)
        .then((product) => setProduct(product))
        .catch((error) => console.log(error));
    }, [productId]);

    return (
        <ItemDetail {...product} ></ItemDetail>  
    ) 
}

export default ItemDeailContainer