//import { GetProduct } from '../../mocks/getProducts'
import ItemDetail from '../ItemDetail/ItemDetail'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { firestoreDb } from '../../services/firebase'
import { getDoc, doc } from 'firebase/firestore'


const ItemDeailContainer  = () => {
    const [product, setProduct] = useState([]);

    const {productId} = useParams()
  
    useEffect(() => {
    //    GetProduct(productId)
    //    .then((product) => setProduct(product))
    //    .catch((error) => console.log(error));
    console.log(productId)
    getDoc(doc(firestoreDb, 'productos', productId)).then(response => {
        const product = { id: response.id, ...response.data()}
        setProduct(product)
    })

    return (() => {
        setProduct()
    })


    }, [productId]);

    return (
        <ItemDetail {...product} ></ItemDetail>  
    ) 
}

export default ItemDeailContainer