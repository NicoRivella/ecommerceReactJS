import { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(0)    

    useEffect(() => {
        console.log('cambio el count')
    }, [count])

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } 
    }

    const increment = () => {
        if (count < stock) {
            setCount(count + 1)
        }
        
    }

    const isIncrementDisabled = () => {
        return (stock === count)
    }

    const isDecrementDisabled = () => {
        return (initial === count)
    }

    return (
        <Card sx={{ minWidth: 275, maxWidth: 275}} variant="outlined">
            <CardActions sx={{justifyContent:"center"}}>
                <Button size="small" variant="contained" disabled={isDecrementDisabled()} onClick={decrement}> - </Button>
            </CardActions>
            <CardContent sx={{justifyContent:"center"}}>
                <Typography align="center" sx={{ fontSize: 14, backgroundColor:"lightblue"}} gutterBottom>
                    {count}
                </Typography>
            </CardContent>
            <CardActions sx={{justifyContent:"center"}}>
                <Button size="small" variant="contained" disabled={(isIncrementDisabled())} onClick={increment}> + </Button>
            </CardActions>
            <CardActions sx={{justifyContent:"center"}}>
                <Button size="small" variant="contained" onClick={() => onAdd(count)}>Agregar al Carrito</Button>
            </CardActions>
        </Card>
  );

}

export default ItemCount