import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
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
            RiveCommerce
          </Typography>
          <MenuItem>
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
          <Box sx={{ flexGrow: 1 }} />
         <CartWidget /> 
        </Toolbar>
      </AppBar>
    </Box>
    )
}

export default NavBar