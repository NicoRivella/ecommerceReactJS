import { Box } from "@mui/material"
import { useState, useEffect } from "react"
import getProducts from "../../mocks/getProducts"
import ItemCount from "../ItemCount/ItemCount"
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

    const handleOnAdd = (quantity) => {
        console.log(`se agregaron ${quantity} productos`)
      }

    return (
        <Box>
            {/*
            <h1>
                {props.greetings}
            </h1> 
            <Box>
                <ItemCount initial={0} stock={10} onAdd={handleOnAdd}/> 
            </Box>
            */}
            <ItemList products={products}></ItemList>      
        </Box>
    )
}

export default ItemListContainer