import './App.css';
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Farmacia from './components/farmacia';
import Perfumeria from './components/perfumeria';
import Cart from './components/Cart'
import {CartContext} from './context/CartContext';
import { useState } from 'react';



function App() {
  
  const [data, setData] = useState({
    items: [],
    cantidad: 0
  })

  return (
     
      <div className="App">
      <header className="App-header">
        
        <CartContext.Provider value = {[data, setData]}>
        <BrowserRouter>
        
        <Switch>

        <Route exact path="/">
        <NavBar />
        <ItemListContainer />      
        </Route>

        <Route exact path="/category/farmacia">
        <NavBar />
        <Farmacia />

        </Route>

        <Route exact path="/category/perfumeria">
        <NavBar />
        <Perfumeria />
        </Route>

        <Route exact path="/Cart">
        <NavBar />
          <Cart />
        </Route>
        
        
        
          
            <Route exact path="/menu-item">
            <NavBar />
              
            </Route>

            <Route exact path="/item/:id">
            <NavBar />
              <ItemDetailContainer />
            </Route>
          
          </Switch>
          
          
        </BrowserRouter>
      </CartContext.Provider>
       
        
              
        
        
      </header>

      
        
      

      
    </div>
    
  );
}

export default App;
