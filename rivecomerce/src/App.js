import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Container from '@mui/material/Container';
import { Box } from '@mui/material';


function App() {
  return (
    <Box>
      <header>
        <NavBar />
      </header>
      <Container sx={{ marginY: 5 }}>
        <ItemListContainer greetings='Próximamente... las ofertas!' />
      </Container><Container sx={{ marginY: 5 }}>
        <ItemDetailContainer />
      </Container>
    </Box>
  );
}

export default App;
