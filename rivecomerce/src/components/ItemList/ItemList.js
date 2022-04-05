import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import Box from '@mui/system/Box';
import getProducts from '../../mocks/getProducts';


const ItemList = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        getProducts()
        .then((products) => setProducts(products))
        .catch((error) => console.log(error));
    }, []);

    return(
        <Box> 
              {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </Box>
    )   
}

export default ItemList