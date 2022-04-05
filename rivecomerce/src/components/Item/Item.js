import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';


const Item  = ({title, pictureUrl, price}) => {
console.log ({title}, {pictureUrl}, {price})
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
        <Button size="small" variant="contained">Ver Detalle</Button>

    </Paper>
)
}

export default Item