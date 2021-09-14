import { useContext } from "react";
import  {CartContext}  from "../context/CartContext";
import carritoLogo from '../img/carrito.png';

function CartWidgetFuncional ({ accion}) {

  const [data, setData] = useContext(CartContext);

  return (
    <div onClick={accion}>

      {data.cantidad > 0 && <h4 className="carritoNumero">{data.cantidad}</h4>}  

      {data.cantidad > 0 && <img id="carritoImg" src={carritoLogo}  />}

     
      
    </div>
  );
}

export default CartWidgetFuncional;