import Item from '../Item/Item';
import Box from '@mui/system/Box';


const ItemList = ({products}) => {

    return(
        <Box> 
              {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </Box>
    )   
}

export default ItemList