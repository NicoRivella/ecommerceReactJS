import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import getProducts from "../../mocks/getProducts"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'


const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        getProducts(categoryId).then(prods => {
            setProducts(prods)
        }).catch(error => console.log(error)) 
    })

    return (
        <Box>
            <ItemList products={products}></ItemList>      
        </Box>
    )
}

export default ItemListContainer