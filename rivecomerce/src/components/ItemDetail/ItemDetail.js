import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';
import { Button } from '@mui/material';
import Box from '@mui/system/Box';
import ItemCount from '../ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { useState, useContext } from 'react'
import { useCart } from '../../context/CartContext'

const ItemDetail  = ({id, title, description, pictureUrl, price, stock}) => {

    const [quantity, setQuantity] = useState(0)
    const  cartC = useCart()

    const handleAdd = (count) => {
        console.log('Agregar al carrito:')
        setQuantity(count)
        console.log(quantity)
        const productObj = {
            id, title, price, quantity: count
        }

        cartC.addItem(productObj)
        console.log(cartC.cart)
    }

return (
    <Paper elevation={5} sx={{
        marginTop: 5,
        width: 750,
        padding: 5, 
      }}>
        <Box sx={{
            marginBottom: 5
            }}>
            <Typography variant='h4'>
               Detalle del Item: {title}
            </Typography>
        </Box>
        <img src={pictureUrl} alt="" height='125'></img>
        <Box sx={{
            marginTop: 5
            }}>
            <Typography variant='body'>
               Detalle del Item: {description}
            </Typography>
        </Box>
        <Box sx={{
            marginTop: 3,
            marginBottom: 3,
            }}>
            <Typography variant='h4'>
                ${price}
            </Typography>
        </Box>
        { cartC.isInCart(id) > 0 ? <Button size="small" variant="contained"><Link style={{textDecoration:"none", color:"white"}} to='/cart'>Ir al carrito</Link></Button> : <ItemCount onAdd={handleAdd} stock={stock}/> }      
    </Paper>
)
}

export default ItemDetail