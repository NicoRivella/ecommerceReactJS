import { Box } from "@mui/material"
import { useState, useEffect } from "react"
//import getProducts from "../../mocks/getProducts"
import ItemList from "../ItemList/ItemList"
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, limit, orderBy } from 'firebase/firestore'
import { firestoreDb } from '../../services/firebase'

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
       // getProducts(categoryId).then(prods => {
       //     setProducts(prods)
       // }).catch(error => console.log(error)) 
       const collectionRef = categoryId 
       ? query(collection(firestoreDb, 'productos'), where('category', '==', categoryId))
       : query(collection(firestoreDb, 'productos'), orderBy("title", "desc"))
       // : collection(firestoreDb, 'products')

       getDocs(collectionRef).then(response => {
        console.log(response)
        const products = response.docs.map(doc => {
            return { id: doc.id, ...doc.data()}
        })
        setProducts(products)
   })
    }, [categoryId])

    if(products.length === 0) {
        return <h1>No hay productos</h1>
    }

    return (
        <Box>
            <ItemList products={products}></ItemList>      
        </Box>
    )
}

export default ItemListContainer