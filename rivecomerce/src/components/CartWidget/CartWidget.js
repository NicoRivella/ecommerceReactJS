import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const CartWidget = (props) => {
    const  cartC = useCart();
    const cantidad = cartC.getQuantity();
    //console.log(cantidad);
    
    if (cantidad > 0) {
      return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Link style={{textDecoration:"none", color:"white"}} to='/cart'>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={cantidad} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link> 
        </Box>     
      )} else {return null};
}

export default CartWidget