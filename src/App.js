import './App.css';
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import tafirol from './img/tafirol.png'
import actron20 from './img/actron20.jpg'


function App() {
  return (
     
      <div className="App">
      <header className="App-header">
       
        <NavBar />
        
        <ItemListContainer>
          <div className="contenedorCards">
          <ItemCount initial="0" stock="3" producto="Tafirol 500 mg x 30 comp "imgProd={tafirol} descripcion="Analgesico" />
          <ItemCount initial="0" stock="5" producto="Actron 400 mg x 20 caps" imgProd={actron20} descripcion="Analgesico" />
          </div>
        </ItemListContainer>
        
        
        
      </header>

      
        
      

      
    </div>
    
  );
}

export default App;
