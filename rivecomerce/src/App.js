import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemLIstContainer'
import Container from '@mui/material/Container';


function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <Container sx={{ marginY: 5 }}>
        <ItemListContainer greetings='Próximamente... las ofertas!' />
      </Container>
    </div>
  );
}

export default App;
