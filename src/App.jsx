import React from 'react';
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListConteiner/ItemListContainer';
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
    </div>
  );
};

export default App;