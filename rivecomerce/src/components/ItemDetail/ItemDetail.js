import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';


const ItemDetail  = ({title, description, pictureUrl, price}) => {
//console.log ({title}, {pictureUrl}, {price}, {description})
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
        <Button size="small" variant="contained">Agregar al Carrito</Button>

    </Paper>
)
}

export default ItemDetail