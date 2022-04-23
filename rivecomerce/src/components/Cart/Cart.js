
import { useCart } from "../../context/CartContext"
import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Cart = () => {

    const carrito = useCart()

    //console.log(carrito)
    let total = 0
    carrito.cart.forEach(producto => {total = producto.quantity * producto.price + total})
    //console.log(subtotal)
    if(carrito.cart.length === 0) {
        return (
            <Paper elevation={3} sx={{
                marginTop: 5,
                width: 600,
                padding: 5, 
              }}>
                <Box sx={{
                    marginBottom: 5
                }}>
                    <Typography variant='h4'>
                        No hay productos en el carrito
                    </Typography>
                </Box>
                <Box sx={{
                    marginBottom: 5
                }}>
                    <Button size="small" variant="contained"><Link style={{textDecoration:"none", color:"white"}} to={'/'}> Listar Productos </Link></Button>
                </Box>

            </Paper>      
        )
    }

    return (
        <Paper elevation={3} sx={{
            marginTop: 5,
            width: 600,
            padding: 5, 
          }}>
            <Box sx={{
                marginBottom: 5
            }}>
                <Typography variant='h3'>
                    Carrito de compras
                </Typography>
            </Box>
            {
                    carrito.cart.map(prod => 
                        <Box sx={{
                            marginTop: 3,
                            marginBottom: 3,
                            }}>
                            <Typography variant='h6'>
                                {prod.title}
                            </Typography>
                            <Typography>
                                {prod.quantity} unidades
                            </Typography>
                            <Typography>
                                Precio Unitario: ${prod.price} 
                            </Typography>
                            <Typography>
                                Subtotal:${prod.price  * prod.quantity}
                            </Typography>
                            <Button size="small" variant="contained" onClick={() => carrito.removeItem(prod.id)}> Eliminar</Button>
                        </Box>
                    )            
             }   
            <Box sx={{
                marginBottom: 5
            }}>
                <Typography variant='h4'>
                    Total: ${total}
                </Typography>
            </Box>
        </Paper>
    )
}


/*
    <Paper elevation={3} sx={{
        marginTop: 5,
        width: 600,
        padding: 5, 
      }}>
        <Box sx={{
            marginBottom: 5
            }}>
            <Typography variant='h4'>
               {title}
            </Typography>
        </Box>
        <img src={pictureUrl} alt="" height='125'></img>
        <Box sx={{
            marginTop: 3,
            marginBottom: 3,
            }}>
            <Typography variant='h4'>
                ${price}
            </Typography>
        </Box>
        <Button size="small" variant="contained"><Link style={{textDecoration:"none", color:"white"}} to={`/detail/${id}`}> Ver Detalle </Link></Button>

    </Paper>


*/
export default Cart