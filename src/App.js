import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting="Bienvenidos" />} />
        <Route path='/category/:categoryId' element={<ItemListContainer />} />
        <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;