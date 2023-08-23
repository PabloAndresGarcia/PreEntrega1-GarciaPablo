import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount.jsx';
import './index.css'

const App = () => {
  return (
    <div>
     
        <Navbar />
        <ItemListContainer 
      greeting={<div className="content">
      <h1>Tienda de ropa</h1>
    </div>}
      />
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)} /> 
    </div>
  );
};

export default App;