import Typography from '@mui/material/Typography';
import Paper  from '@mui/material/Paper';
import Box from '@mui/system/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Item  = ({id, title, pictureUrl, price}) => {
//console.log ({title}, {pictureUrl}, {price})
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
        <Button size="small" variant="contained"><Link style={{textDecoration:"none", color:"white"}} to={`/detail/${id}`}> Ver Detalle </Link></Button>

    </Paper>
)
}

export default Item