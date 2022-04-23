import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CartProvider from './context/CartContext' 
import Cart from './components/Cart/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Box>
          <header>
            <NavBar />
          </header>
          <Container sx={{ marginY: 5 }}>
            <Routes>
              <Route path='/' element= {<ItemListContainer/>}/>
              <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element= {<Cart/>}/>
              <Route path='*' element= {<h1>ELEMENT NOT FOUND 404</h1>}/>
            </Routes>
          </Container>
        </Box>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
