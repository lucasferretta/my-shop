import './App.css';
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Switch, Route} from "react-router-dom"
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
     
      <div className="App">
      <header className="App-header">
        
        <BrowserRouter>
        <Switch>

        <Route exact path="/">
        <NavBar />
        <ItemListContainer />      
        </Route>

        <Route exact path="/category/:categoryId">
        <NavBar />
              
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
      
       
        
              
        
        
      </header>

      
        
      

      
    </div>
    
  );
}

export default App;
