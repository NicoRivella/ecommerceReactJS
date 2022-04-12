import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"


function App() {
  return (
    <BrowserRouter>
      <Box>
        <header>
          <NavBar />
        </header>
        <Container sx={{ marginY: 5 }}>
        {/* <ItemListContainer greetings='Próximamente... las ofertas!' />
        </Container><Container sx={{ marginY: 5 }}>
          <ItemDetailContainer />
        */}

          <Routes>
            <Route path='/' element= {<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element= {<ItemListContainer/>}/>
            <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
            <Route path='*' element= {<h1>ELEMENT NOT FOUND 404</h1>}/>
          </Routes>
        </Container>
      </Box>
    </BrowserRouter>
  );
}

export default App;
