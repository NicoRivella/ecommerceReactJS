import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemLIstContainer';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <ItemListContainer greetings='Próximamente... las ofertas!' />
    </div>
  );
}

export default App;
