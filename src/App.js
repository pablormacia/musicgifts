import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos" />
      <ItemCount initial="1" stock="10" />
    </>
  );
}

export default App;