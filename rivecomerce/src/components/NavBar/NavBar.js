import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget'
import {useState, useEffect } from 'react'
import { getCategories } from '../../mocks/getProducts';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
      getCategories().then( categories => {
        setCategories(categories)
      })
    }, [])

    return(
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
          <NavLink style={{textDecoration:"none", color:"white"}} to={'/'}>RiveCommerce</NavLink> 
          </Typography>
          {/*<MenuItem>
            <Typography align="center">
              Libros
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography align="center">
              CDs
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography align="center">
              DVDs
            </Typography>
          </MenuItem>
        */}
        { categories.map(cat => <MenuItem><Typography align="center"><NavLink style={{textDecoration:"none", color:"white"}} key={cat.id} to={`/category/${cat.id}`}>{cat.description}</NavLink></Typography></MenuItem> )}
        <Box sx={{ flexGrow: 1 }} />
         <CartWidget /> 
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar