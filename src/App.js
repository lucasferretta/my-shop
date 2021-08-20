import './App.css';
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer';



function App() {
  return (
     
      <div className="App">
      <header className="App-header">
        
        <NavBar />
        <ItemDetailContainer />
        <ItemCount />
        <ItemListContainer />
        
      
       
        
              
        
        
      </header>

      
        
      

      
    </div>
    
  );
}

export default App;
