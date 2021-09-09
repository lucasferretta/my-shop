import ItemCount from './ItemCount';
import { useContext } from 'react';
import { useHistory } from "react-router-dom";
import {CartContext} from '../context/CartContext';



function ItemDetail({detail}) {
    
  const [data, setData] = useContext(CartContext);
  const history = useHistory();
  const {stock, name, accion, precio, imagen} = detail
    
    
    
   

    const onAdd = (cantidad) => {
      if (stock >= cantidad) {
        const productoInCart = data.items.find((items) => items.id === detail.id)
        console.log(productoInCart)
        if(typeof productoInCart === 'undefined') {
          console.log(`Se ha agregado al carrito ${cantidad} productos`)
          setData({
            ...data,
            cantidad: data.cantidad + cantidad,
            items: [...data.items, {...detail, qty: cantidad}]
          })
        }else{ 
          productoInCart.qty += cantidad
          setData({
            ...data,
            cantidad: data.cantidad + cantidad,
          })
          console.log(`Se ha actualizo al carrito ${cantidad} productos`);
  
        }
        history.push('/cart');
        
      }else{
        console.log(`No hay stock disponible`)
      }
    }

    
    
    
    return (

    <div className="card">

                
        <div className="card-body">
      
                <img className="imgSize" alt="imagen" src={imagen}/>
          
                
          <h3 className="card-title">{name}</h3>
                <p className="card-text">{accion}</p>
                <h4>Stock: {stock}</h4>
                <p className="card-text">{precio}</p>
          </div>
          
            <ItemCount stock={stock} initial={0} action={onAdd} />

        
            
          </div>
      
    );
}

export default ItemDetail;